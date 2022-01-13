import axios from "axios";
import {  setAuthorizationHeaderForServieCalls } from ".";
import { API } from "./axios.serverRequest";

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
  