import { createContext, useContext, useReducer } from "react";
import {  setAuthorizationHeaderForServieCalls } from "../components/axios/axios.serverRequest";
import {loginReducer} from '../Reducer/loginReducer'
export const AuthContext = createContext();
export function AuthProvider({ children }) {

  const loginStatus= JSON.parse(localStorage.getItem('login'));
  let initalState;
  if(loginStatus?.isUserLoggedIn){
    initalState={
       login:true,
       userName:loginStatus.userName,
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

