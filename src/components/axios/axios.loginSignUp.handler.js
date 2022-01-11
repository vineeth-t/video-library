import axios from "axios";
import { API } from "./axios.serverRequest";

export async function signUpHandler(e,errorDispatch,formState,authDispatch,formChecker,navigate,dispatch){
    console.log(formState)
    e.preventDefault();
      if(formChecker(formState,errorDispatch)) {
          const {data:{response,userId,message}}=await axios.post(`${API}/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
          password:formState.password}) 
          console.log(formState.fname,userId)
          if(response){
              localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:formState.fname,userId:userId}))
              authDispatch({type:'LOGIN',payload:{userName:formState.fname,userId:userId}})
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
      const {data:{response,fname,userId,message}}=await axios.post(`${API}/logIn`,{username:userName,password:password})
      if(response){
          localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:fname,userId:userId}))
          authDispatch({type:'LOGIN',payload:{userName:fname,userId}})
          navigate(state?.from?state.from:'/profile')
      }else{
        dispatch({type:'TOAST',payload:message})
      }
    }catch(error){
        console.log(error)
        dispatch({type:'TOAST',payload:error})
    }
  
  }
  