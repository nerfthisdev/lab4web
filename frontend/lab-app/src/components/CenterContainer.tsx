import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function CenterContainer({ children }: Props) {
  return <div className="">{children}</div>;
}
