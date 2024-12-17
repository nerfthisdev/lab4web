import { Mafs, Coordinates, Theme, Polygon, Plot } from "mafs";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { vec } from "mafs";

import { addPoint } from "../state/points/pointSlice";

import { Point } from "mafs";
import { useDispatch } from "react-redux";

export function Graph() {
  const dispatch = useDispatch();
  const points = useSelector((state: RootState) => state.points.pointsArray);

  const pointExists = (checkedPoint: vec.Vector2, threshold = 0.001) => {
    return points.some(
      (point) =>
        Math.abs(point[0] - checkedPoint[0]) < threshold &&
        Math.abs(point[1] - checkedPoint[1]) < threshold
    );
  };

  const handleClick = (clickedPoint: vec.Vector2) => {
    if (pointExists(clickedPoint)) {
      console.log(
        `Point already exists near x: ${clickedPoint[0]}, y: ${clickedPoint[1]}`
      );
      return;
    }

    dispatch(addPoint(clickedPoint));
    console.log(`Added point: x: ${clickedPoint[0]}, y: ${clickedPoint[1]} `);
  };

  const radius = useSelector((state: RootState) => state.radius.value);
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
        <Point key={index} x={point[0]} y={point[1]} />
      ))}
    </Mafs>
  );
}
