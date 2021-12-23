import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

export function PrivateRoute({path, ...props }) {
  const {authState:{ login} } = useAuthContext();
  return login ? <Route path={path} {...props} /> : <Navigate state={{from:path}} replace to="/login" />;
}
