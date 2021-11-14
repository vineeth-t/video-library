import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";

export function PrivateRoute({path, ...props }) {
  const {state:{ login} } = useAuthContext();
  console.log('hello',login,path)
  return login ? <Route path={path} {...props} /> : <Navigate state={{from:path}} replace to="/login" />;
}
