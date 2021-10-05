import { createContext, useContext, useEffect, useState } from "react";
import { AuthApi } from "../api/AuthApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    const loginStatus=JSON.parse(localStorage.getItem('login'))
    loginStatus?.isUserLoggedIn&&setLogin(true);
}, [])
  async function loginInWithCredentials(state,userName,password,navigate){
        try{
          const response= await AuthApi(userName,password);
          if(response?.success){
            setLogin(true)
            localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true}))
            navigate(state?.from?state.from:'/login')
          }
        }catch(error){
          alert('In valid Credentials')
          navigate('/login')
        }
    }
  return (
    <AuthContext.Provider value={{ login,setLogin, loginInWithCredentials }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
