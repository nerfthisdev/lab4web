import { Graph } from "../components/Graph";
import { Radio } from "../components/Radio";
import { TextInputWithLabel } from "../components/TextInputWithLabel";

export function AppPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="box-with-inputs bg-dark text-white p-4 rounded shadow-sm">
        <TextInputWithLabel inputId="y1">Y:</TextInputWithLabel>
        <TextInputWithLabel inputId="y2">Y:</TextInputWithLabel>
        <Radio items={["1", "2", "3", "4"]} />
      </div>
      <div className="ms-4 rounded-4 border border-1 overflow-hidden">
        <Graph />
      </div>
    </div>
  );
}
