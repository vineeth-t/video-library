import axios from "axios";
import { API, setAuthorizationHeaderForServieCalls } from "./axios.serverRequest";

export async function signUpHandler(e,errorDispatch,formState,authDispatch,formChecker,navigate,dispatch){
    console.log(formState)
    e.preventDefault();
      if(formChecker(formState,errorDispatch)) {
          const {data:{response,message,token}}=await axios.post(`${API}/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
          password:formState.password}) 
          if(response){
              setAuthorizationHeaderForServieCalls(token)
              localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,
                                                            token:token
                                                          }))
              authDispatch({type:'LOGIN',payload:token})
              navigate('/profile')
          }else{
            console.log(response)
              dispatch({type:'TOAST',payload:message})
          }
              
      }   
    
  }
  export async function loginHandler(event,loginDetails){
    event.preventDefault ();
    const{state,userName,password,authDispatch,navigate,dispatch}=loginDetails
    try{
      const {data:{response,message,token}}=await axios.post(`${API}/logIn`,{username:userName,password:password})
      if(response){
          setAuthorizationHeaderForServieCalls(token)
          localStorage?.setItem('login',
                        JSON.stringify({isUserLoggedIn:true,
                                        token:token
                                      }))
          authDispatch({type:'LOGIN',payload:token})
          navigate(state?.from?state.from:'/profile')
      }else{
        dispatch({type:'TOAST',payload:message})
      }
    }catch(error){
        console.log(error)
        dispatch({type:'TOAST',payload:error})
    }
  }
  export function logoutHandler(authDispatch,dispatch){
    authDispatch({type:'LOGOUT'})
    dispatch({type:'TOAST',payload:'Logout success'})
    localStorage.removeItem('login')
}
 export const passwordChanger=async(e,passwordState,dispatch,setPasswordEditor)=>{
    const {newPassword,confirmNewPassword,currentPassword}=passwordState
    e.preventDefault()
    if(confirmNewPassword!=='' && newPassword!==''){
        if(newPassword===confirmNewPassword ){
            const {data:{response,message}}=await axios.post(`${API}/user`,{
            currentPassword,newPassword
            })
            if(response){
                dispatch({type:'TOAST',payload:message})
                setPasswordEditor(false)
            }
        
        }else{
            dispatch({type:'TOAST',payload:'Password not matching '})
        }
    }else{
        dispatch({type:'TOAST',payload:'Enter Password'})
    }
}

export const getProfileDetails= async(authDispatch)=>{
        try{ 
          const {data:{response,firstname,lastname,username}}= await axios.get(`${API}/user`) ;
          console.log(response)
        if(response){
            authDispatch({type:'SET_USER_DETAILS',payload:{firstname,lastname,username}})
        }}catch(error){
            console.log(error)
        }
  }