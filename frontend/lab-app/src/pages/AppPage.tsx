import { FormSubmitButton } from "../components/FormSubmitButton";
import { Graph } from "../components/Graph";

import { RadioFieldSet } from "../components/RadioFieldSet";
import { TextInputWithLabel } from "../components/TextInputWithLabel";

export function AppPage() {
  const values = ["1", "2", "3", "4", "5"];

  return (
    <form>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="box-with-inputs bg-dark text-white p-4 rounded shadow-sm">
          <TextInputWithLabel inputId="x2" label="X:" />
          <TextInputWithLabel inputId="y2" label="Y:" />
          <RadioFieldSet items={values} itemsvalues={values}>
            R:
          </RadioFieldSet>
        </div>
        <div className="ms-4 rounded-4 border border-1 overflow-hidden">
          <Graph />
        </div>
      </div>
      <FormSubmitButton>Submit</FormSubmitButton>
    </form>
  );
}
