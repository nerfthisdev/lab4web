import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FormSubmitButton({ children }: Props) {
  return (
    <button type="submit" className="btn btn-primary">
      {children}
    </button>
  );
}
