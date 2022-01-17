import { createContext, useContext, useReducer } from "react";
import {  setAuthorizationHeaderForServieCalls } from "../components/axios/axios.serverRequest";
import {loginReducer} from '../Reducer/loginReducer'
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const loginStatus= JSON.parse(localStorage.getItem('login'));
  let initalState={
    login:false,
    UserName:'',
    emailId:'',
    password:'',
    token:''
  };
  if(loginStatus?.isUserLoggedIn){
    initalState.login=true;
    initalState.token=loginStatus.token
    setAuthorizationHeaderForServieCalls(loginStatus.token);    
   }
   const[authState,authDispatch]=useReducer(loginReducer, initalState)
   return (
  <AuthContext.Provider value={{authState,authDispatch}}>
    {children}
  </AuthContext.Provider>
);
}
export function useAuthContext() {
  return useContext(AuthContext);
}

