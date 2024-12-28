import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: MouseEventHandler;
}

export function FormSubmitButton({ children, onClick }: Props) {
  return (
    <button type="submit" className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}
