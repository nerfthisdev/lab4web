import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function PosRelative({ children }: Props) {
  return <div className="position-relative">{children}</div>;
}
