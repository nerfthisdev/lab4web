import { FormEventHandler } from "react";

interface TextInputWithLabelProps {
  inputId: string;
  label: string;
  onInput: FormEventHandler;
}

export function TextInputWithLabel({
  inputId,
  label,
  onInput,
}: TextInputWithLabelProps) {
  return (
    <div className="row mb-3">
      <label htmlFor={inputId} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          type="text"
          className="form-control"
          id={inputId}
          onInput={onInput}
        />
      </div>
    </div>
  );
}
