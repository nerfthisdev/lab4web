import { ReactNode } from "react";

interface Props {
  items: string[];
  itemsvalues: string[];
  children: ReactNode;
  onChange: (value: string) => void;
}

export function RadioFieldSet({
  items,
  itemsvalues,
  children,
  onChange,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // Pass the selected value to the parent
  };

  return (
    <fieldset className="row mb-3">
      <legend className="col-form-label col-sm-2 pt-0">{children}</legend>
      <div className="col-sm-10">
        {items.map((items, index) => (
          <div className="form-check" key={items}>
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id={`gridRadios${index}`}
              value={itemsvalues[index]}
              defaultChecked={index === 0 ? true : false}
            />
            <label className="form-check-label" htmlFor={`gridRadios${index}`}>
              {items}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
