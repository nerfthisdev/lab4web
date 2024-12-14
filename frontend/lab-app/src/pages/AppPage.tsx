import { FormSubmitButton } from "../components/FormSubmitButton";
import { Graph } from "../components/Graph";
import { CSSProperties } from "react";

import { RadioFieldSet } from "../components/RadioFieldSet";
import { TextInputWithLabel } from "../components/TextInputWithLabel";

const containerBoxStyle: CSSProperties = {
  height: "90vh",
  border: "3px",
  boxSizing: "border-box",
};

export function AppPage() {
  const values = ["1", "2", "3", "4", "5"];

  return (
    <div
      className="d-flex justify-content-center align-items-center overflow-hidden"
      style={containerBoxStyle}
    >
      <div className="box-with-inputs bg-dark text-white p-4 rounded shadow-sm overflow-hidden">
        <TextInputWithLabel inputId="x2" label="X:" />
        <TextInputWithLabel inputId="y2" label="Y:" />
        <RadioFieldSet items={values} itemsvalues={values}>
          R:
        </RadioFieldSet>

        <div className="d-flex justify-content-center overflow-hidden">
          <FormSubmitButton>Submit</FormSubmitButton>
        </div>
      </div>
      <div className="ms-4 rounded-4 border border-1 overflow-hidden">
        <Graph />
      </div>
    </div>
  );
}
