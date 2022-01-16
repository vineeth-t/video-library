import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { expectionHandlerForServiceCalls, setAuthorizationHeaderForServieCalls } from "../components/axios";
import {loginReducer} from '../Reducer/loginReducer'
import { logoutHandler } from "../Routes/ProfileDetails/profile";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const navigate=useNavigate()
  const loginStatus= JSON.parse(localStorage.getItem('login'));
  let initalState;
  if(loginStatus?.isUserLoggedIn){
    initalState={
       login:true,
       userName:loginStatus.username,
       password:'',
       token:loginStatus.authToken
     }
     setAuthorizationHeaderForServieCalls(loginStatus.authToken);
     
   }else{
       initalState={
           login:false,
           name:'',
           emailId:'',
           userName:'',
           password:'',
           token:''
         }
   }
   useEffect(() => {
    expectionHandlerForServiceCalls(logoutHandler, navigate,authDispatch);
 }, [navigate]);
 const[authState,authDispatch]=useReducer(loginReducer, initalState)
   return (
  <AuthContext.Provider value={{authState,authDispatch }}>
    {children}
  </AuthContext.Provider>
);
}
export function useAuthContext() {
  return useContext(AuthContext);
}

