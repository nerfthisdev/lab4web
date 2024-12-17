import { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRadius } from "../state/radius/radiusSlice";
import { RootState } from "../state/store";

interface Props {
  items: string[];
  itemsvalues: string[];
  children: ReactNode;
}

export function RadioFieldSet({ items, itemsvalues, children }: Props) {
  const dispatch = useDispatch();

  const selectedRadius = useSelector(
    (state: RootState) => state.radiusReducer.value
  );

  const handleChange = (value: number) => {
    dispatch(setRadius(value));
  };

  return (
    <fieldset className="row mb-3">
      <legend className="col-form-label col-sm-2 pt-0">{children}</legend>
      <div className="col-sm-10">
        {items.map((item, index) => (
          <div className="form-check" key={item}>
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id={`gridRadios${index}`}
              value={itemsvalues[index]}
              checked={selectedRadius === parseInt(itemsvalues[index])}
              onChange={() => handleChange(parseInt(itemsvalues[index]))}
            />
            <label className="form-check-label" htmlFor={`gridRadios${index}`}>
              {item}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
