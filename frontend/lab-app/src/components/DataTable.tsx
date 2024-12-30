import { useSelector } from "react-redux";
import { RootState } from "../state/store";

export default function DataTable() {
  // Access the pointsArray from the Redux state
  const pointsArray = useSelector(
    (state: RootState) => state.points.pointsArray
  );

  return (
    <table>
      <thead>
        <tr>
          <th>X</th>
          <th>Y</th>
          <th>Radius</th>
          <th>Flag</th>
        </tr>
      </thead>
      <tbody>
        {pointsArray.map((point, index) => (
          <tr key={index}>
            <td>{point.pos[0]}</td>
            <td>{point.pos[1]}</td>
            <td>{point.radius}</td>
            <td>{point.flag ? "True" : "False"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
