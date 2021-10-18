
import { Route,Navigate } from "react-router-dom";
import {useLogin}  from "../contexts/login.context"

export default function PrivateRoute({ path, ...props }) {
    const{userLogin} = useLogin();
  return userLogin ? (
    <Route {...props} path={path}/>
  ) : (
    <Navigate replace state={{from:path}} to="/log-in"></Navigate>
  );
}
