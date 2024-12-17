import { Mafs, Coordinates, Theme, Polygon, Plot } from "mafs";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

import { useState } from "react";

import { vec } from "mafs";

import { Point } from "mafs";

export function Graph() {
  const [point, setPoint] = useState<vec.Vector2 | null>(null);

  const handleClick = (point: vec.Vector2, event: MouseEvent) => {
    console.log("Clicked point: ", point);
    setPoint(point);
  };

  const radius = useSelector((state: RootState) => state.radiusReducer.value);
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
      {point && <Point x={point[0]} y={point[1]} color="blue" />}
      <Plot.Inequality
        y={{
          ">=": upperBoundary,
          "<=": lowerBoundary,
        }}
        color={Theme.blue}
      />
      <Polygon points={[c, a, b]} color={Theme.blue} />
      <Polygon points={[c, e, f, d]} color={Theme.blue} />
    </Mafs>
  );
}
