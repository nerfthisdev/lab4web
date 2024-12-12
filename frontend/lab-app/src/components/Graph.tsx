import { Mafs, Coordinates } from "mafs";

export function Graph() {
  return (
    <Mafs width={500} height={500}>
      <Coordinates.Cartesian />
    </Mafs>
  );
}
