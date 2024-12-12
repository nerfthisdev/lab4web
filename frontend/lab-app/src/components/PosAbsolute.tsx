import { ReactNode } from "react";

interface Props {
  classname: string;
  children: ReactNode;
}

export function PosAbsolute({ children, classname }: Props) {
  return <div className={`position-relative ${classname}`}>{children}</div>;
}
