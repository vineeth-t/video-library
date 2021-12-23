import { createContext, useContext, useReducer } from "react";
import {loginReducer} from '../Reducer/loginReducer'
const AuthContext = createContext();
export function AuthProvider({ children }) {
let login,userId;
let userName='';
const loginStatus=JSON.parse(localStorage.getItem('login'))
if(loginStatus?.isUserLoggedIn){
  login=true
  userName=loginStatus.userName
  userId=loginStatus.userId
}else{
  login=false
}
  const[authState,authDispatch]=useReducer(loginReducer, {
                                                    userId,
                                                    login,
                                                    userName,
                                                    password:''
                                                  })   
   return (
  <AuthContext.Provider value={{authState,authDispatch }}>
    {children}
  </AuthContext.Provider>
);
}
export function useAuthContext() {
  return useContext(AuthContext);
}

