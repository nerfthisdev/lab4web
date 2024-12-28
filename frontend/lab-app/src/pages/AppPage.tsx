import { FormSubmitButton } from "../components/FormSubmitButton";
import { Graph } from "../components/Graph";
import { CSSProperties, useState } from "react";

import { RadioFieldSet } from "../components/RadioFieldSet";
import { TextInputWithLabel } from "../components/TextInputWithLabel";
import { sendPoint } from "../services/apiService";

const containerBoxStyle: CSSProperties = {
  height: "90vh",
  border: "3px",
  boxSizing: "border-box",
};

export function AppPage() {
  const values = ["1", "2", "3", "4", "5"];
  const [x, setX] = useState(Number);
  const [y, setY] = useState(Number);

  const handleClick = async () => {
    var radius = 1;
    try {
      const response = await sendPoint({ x, y, radius });
      console.log("Point saved to backend:", response);
    } catch (error) {
      console.error("Error saving point to backend");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center overflow-hidden"
      style={containerBoxStyle}
    >
      <div className="box-with-inputs bg-dark text-white p-4 rounded shadow overflow-hidden ">
        <TextInputWithLabel
          inputId="x2"
          label="X:"
          onInput={(e) => setX(Number((e.target as HTMLInputElement).value))}
        />
        <TextInputWithLabel
          inputId="y2"
          label="Y:"
          onInput={(e) => setY(Number((e.target as HTMLInputElement).value))}
        />
        <RadioFieldSet items={values} itemsvalues={values}>
          R:
        </RadioFieldSet>

        <div className="d-flex justify-content-center overflow-hidden">
          <FormSubmitButton onClick={handleClick}>Submit</FormSubmitButton>
        </div>
      </div>
      <div className="ms-4 rounded-4 border border-1 overflow-hidden">
        <Graph />
      </div>
    </div>
  );
}
