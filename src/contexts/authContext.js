import { createContext, useContext, useState } from "react";
const User={
  name:'tanay',
  password:'god'
}
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState(false);
  
  function loginInWithCredentials(state,userName,password,navigate){
        if(User.name===userName && User.password===password){
          setLogin(true);
          navigate(state?.from?state.from:'/login')
        }else{
          alert('In-valid Credentials')
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
