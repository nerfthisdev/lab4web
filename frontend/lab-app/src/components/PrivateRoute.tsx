import { ReactNode } from "react";
import { isAuthenticated } from "../services/apiService";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export function PrivateRoute({ children }: Props) {
  return isAuthenticated() ? <>{children}</> : <Navigate to={"/login"} />;
}
