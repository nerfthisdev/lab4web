import { Mafs, Coordinates, Theme, Polygon, Plot } from "mafs";

import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export function Graph() {
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
    <Mafs width={500} height={500} viewBox={{ x: [-6, 6], y: [-6, 6] }}>
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
    </Mafs>
  );
}
