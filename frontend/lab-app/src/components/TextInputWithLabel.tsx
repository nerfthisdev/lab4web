interface TextInputWithLabelProps {
  inputId: string;
  label: string;
}

export function TextInputWithLabel({
  inputId,
  label,
}: TextInputWithLabelProps) {
  return (
    <div className="row mb-3">
      <label htmlFor={inputId} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input type="text" className="form-control" id={inputId} />
      </div>
    </div>
  );
}
