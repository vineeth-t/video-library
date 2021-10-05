import { createContext, useContext, useState } from "react";
import { AuthApi } from "../api/AuthApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  
  async function loginInWithCredentials(state,userName,password,navigate){
        try{
          const response= await AuthApi(userName,password);
          if(response?.success){
            setLogin(true)
            navigate(state?.from?state.from:'/login')
          }
        }catch(error){
          alert('In valid Credentials')
          navigate('/login')
        }
    }
  return (
    <AuthContext.Provider value={{ login, loginInWithCredentials }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}
