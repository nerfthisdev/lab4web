import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  type: string;
}

export function Alert({ children, type }: Props) {
  return <div className={`alert alert-${type}`}>{children}</div>;
}
