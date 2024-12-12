interface RadioFieldSetProps {
  legend: string;
  options: { id: string; value: string; label: string; disabled?: boolean }[];
}

export function RadioFieldSet({ legend, options }: RadioFieldSetProps) {
  return (
    <fieldset className="row mb-3">
      <legend className="col-form-label col-sm-2 pt-0">{legend}</legend>
      <div className="col-sm-10">
        {options.map((option) => (
          <div
            className={`form-check ${option.disabled ? "disabled" : ""}`}
            key={option.id}
          >
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id={option.id}
              value={option.value}
              disabled={option.disabled}
            />
            <label className="form-check-label" htmlFor={option.id}>
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
