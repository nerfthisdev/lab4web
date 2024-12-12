import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  inputId: string;
}

export function TextInputWithLabel({ children, inputId }: Props) {
  return (
    <>
      <div className="row mb-3">
        <label htmlFor={inputId} className="col-sm-2 col-form-label">
          {children}
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id={inputId}></input>
        </div>
      </div>
    </>
  );
}
