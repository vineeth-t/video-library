import { createContext, useContext, useReducer } from "react";
import {loginReducer} from '../Reducer/loginReducer'
import { AuthApi } from "../api/AuthApi";
const AuthContext = createContext();
export function AuthProvider({ children }) {
let login;
let userName='';
const loginStatus=JSON.parse(localStorage.getItem('login'))
if(loginStatus?.isUserLoggedIn){
                                 login=true
                                 userName=loginStatus.userName;
}else{
      login=false
}
  const[state,dispatch]=useReducer(loginReducer, {
                                                    login,
                                                    userName,
                                                    password:''
                                                  })   
async function loginInWithCredentials(state,userName,password,navigate){
               try{
                const response= await AuthApi(userName,password);
                 if(response?.success){
                          dispatch({type:'LOGIN',payload:userName})
                          localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:userName}))
                          navigate(state?.from?state.from:'/profile')
                            }
                  }catch(error){
                       alert('In valid Credentials')
                       navigate('/login')
     }
  }
   return (
  <AuthContext.Provider value={{state,dispatch,loginInWithCredentials }}>
    {children}
  </AuthContext.Provider>
);
}
export function useAuthContext() {
  return useContext(AuthContext);
}

