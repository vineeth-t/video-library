import axios from "axios";
import { API, setAuthorizationHeaderForServieCalls } from "./axios.serverRequest";

export async function signUpHandler(e,errorDispatch,formState,authDispatch,formChecker,navigate,dispatch){
    console.log(formState)
    e.preventDefault();
      if(formChecker(formState,errorDispatch)) {
          const {data:{response,name,message,token}}=await axios.post(`${API}/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
          password:formState.password}) 
          if(response){
              setAuthorizationHeaderForServieCalls(token)
              localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,
                                                            userName:name,
                                                            token:token
                                                          }))
              authDispatch({type:'LOGIN',payload:{userName:name,token}})
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
      const {data:{response,name,message,token}}=await axios.post(`${API}/logIn`,{username:userName,password:password})
      console.log(token)
      if(response){
          setAuthorizationHeaderForServieCalls(token)
          localStorage?.setItem('login',
                        JSON.stringify({isUserLoggedIn:true,
                                        userName:name,
                                        token:token
                                      }))
          authDispatch({type:'LOGIN',payload:{userName:name,
                                              token
                                            }})
          navigate(state?.from?state.from:'/profile')
      }else{
        dispatch({type:'TOAST',payload:message})
      }
    }catch(error){
        console.log(error)
        dispatch({type:'TOAST',payload:error})
    }
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
                console.log(message)
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