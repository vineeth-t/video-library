import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";

export function PrivateRoute({ ...props }) {
  const { login } = useAuthContext();
  return login ? <Route {...props} /> : <Navigate to="/login" />;
}
