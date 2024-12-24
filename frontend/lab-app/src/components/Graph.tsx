import { Mafs, Coordinates, Theme, Polygon, Plot } from "mafs";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { vec } from "mafs";

import { addPoint } from "../state/points/pointSlice";

import { Point } from "mafs";
import { useDispatch } from "react-redux";
import { sendPoint } from "../services/apiService";

export function Graph() {
  const dispatch = useDispatch();
  const radius = useSelector((state: RootState) => state.radius.value);
  const points = useSelector((state: RootState) =>
    state.points.pointsArray.filter((point) => point.radius === radius)
  );

  const pointExists = (x: number, y: number, threshold = 0.001) => {
    return points.some(
      (point) =>
        Math.abs(point.pos[0] - x) < threshold &&
        Math.abs(point.pos[1] - y) < threshold
    );
  };

  const handleClick = async (clickedPoint: vec.Vector2) => {
    const [x, y] = clickedPoint;
    if (pointExists(x, y)) {
      console.log(
        `Point already exists near x: ${clickedPoint[0]}, y: ${clickedPoint[1]}`
      );
      return;
    }
    try {
      const response = await sendPoint({ x, y, radius });
      dispatch(addPoint({ pos: clickedPoint, radius }));
      console.log("Point saved to backend:", response);
    } catch (error) {
      console.error("Error saving point to backend");
    }
  };

  const a = [-(radius / 2), 0] as [number, number];
  const b = [0, radius] as [number, number];
  const c = [0, 0] as [number, number];

  const d = [0, -radius] as [number, number];
  const e = [radius, 0] as [number, number];
  const f = [radius, -radius] as [number, number];

  const upperBoundary = (x: number) =>
    x <= 0 && x >= -radius ? -Math.sqrt(radius ** 2 - x ** 2) : NaN;

  const lowerBoundary = (x: number) => (x <= 0 && x >= -radius ? 0 : NaN);

  return (
    <Mafs
      width={500}
      height={500}
      viewBox={{ x: [-6, 6], y: [-6, 6] }}
      onClick={handleClick}
      pan={false}
    >
      <Coordinates.Cartesian />
      <Plot.Inequality
        y={{
          ">=": upperBoundary,
          "<=": lowerBoundary,
        }}
        color={Theme.blue}
      />
      <Polygon points={[c, a, b]} color={Theme.blue} />
      <Polygon points={[c, e, f, d]} color={Theme.blue} />
      {points.map((point, index) => (
        <Point key={index} x={point.pos[0]} y={point.pos[1]} />
      ))}
    </Mafs>
  );
}
