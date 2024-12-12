import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AppContainer({ children }: Props) {
  return <div>{children}</div>;
}
