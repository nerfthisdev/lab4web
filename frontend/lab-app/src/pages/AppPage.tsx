import { Graph } from "../components/Graph";

import { RadioFieldSet } from "../components/RadioFieldSet";
import { TextInputWithLabel } from "../components/TextInputWithLabel";

export function AppPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="box-with-inputs bg-dark text-white p-4 rounded shadow-sm">
        <TextInputWithLabel inputId="y1" label="Y:" />
        <TextInputWithLabel inputId="y2" label="Y:" />
        <RadioFieldSet
          legend="Radios"
          options={[
            {
              id: "gridRadios1",
              value: "option1",
              label: "First radio",
              disabled: false,
            },
            {
              id: "gridRadios2",
              value: "option2",
              label: "Second radio",
              disabled: false,
            },
            {
              id: "gridRadios3",
              value: "option3",
              label: "Third disabled radio",
              disabled: true,
            },
          ]}
        />
      </div>
      <div className="ms-4 rounded-4 border border-1 overflow-hidden">
        <Graph />
      </div>
    </div>
  );
}
