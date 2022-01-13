import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { expectionHandlerForServiceCalls, setAuthorizationHeaderForServieCalls } from "../components/axios";
import {loginReducer} from '../Reducer/loginReducer'
import { logoutHandler } from "../Routes/ProfileDetails/profile";
const AuthContext = createContext();
export function AuthProvider({ children }) {
const navigate=useNavigate()
let login,token;
let userName='';
const loginStatus=JSON.parse(localStorage.getItem('login'))
if(loginStatus?.isUserLoggedIn){
  login=true
  userName=loginStatus.userName
  token=loginStatus.token;
  setAuthorizationHeaderForServieCalls(token)
}else{
  login=false;
} 
const[authState,authDispatch]=useReducer(loginReducer, {
  token,
  login,
  userName,
  password:''
}) 
useEffect(()=>{
  expectionHandlerForServiceCalls(logoutHandler, navigate,authDispatch);
},[navigate])
   return (
  <AuthContext.Provider value={{authState,authDispatch }}>
    {children}
  </AuthContext.Provider>
);
}
export function useAuthContext() {
  return useContext(AuthContext);
}

