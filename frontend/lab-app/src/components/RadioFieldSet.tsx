import { ReactNode } from "react";

interface Props {
  items: string[];
  itemsvalues: string[];
  children?: ReactNode;
}

export function RadioFieldSet({ items, itemsvalues, children }: Props) {
  return (
    <div className="mb-3">
      {children && <span className="mb-2 d-block">{children}</span>}
      {items.map((item, index) => (
        <div className="form-check" key={index}>
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id={`exampleRadios${index}`}
            value={itemsvalues[index]}
          />
          <label className="form-check-label" htmlFor={`exampleRadios${index}`}>
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
