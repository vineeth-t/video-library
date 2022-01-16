import axios from "axios";
import { useReducer, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { passwordChanger } from "../../components/axios";
import { API } from "../../components/axios/axios.serverRequest";
import { useAuthContext, useStateContext } from "../../contexts"
import { passwordReducer } from "../../Reducer/editPasswordReducer";
import './profile.css'
export function logoutHandler(authDispatch,dispatch){
    authDispatch({type:'LOGOUT'})
    dispatch({type:'TOAST',payload:'Logout success'})
    localStorage.removeItem('login')
}

export function Profile(){
    const{authState:{name,emailId},authDispatch}=useAuthContext();
    const{dispatch}=useStateContext();
    const[passwordEditor,setPasswordEditor]=useState(false)
    useEffect(()=>{
        (async()=>{
              try{ 
                const {data:{response,firstname,lastname,username}}= await axios.get(`${API}/user`) ;
              if(response){
                  authDispatch({type:'SET_USER_DETAILS',payload:{firstname,lastname,username}})
              }}catch(error){
                  console.log(error)
              }
        })()
    },[authDispatch])
    return( 
            <div>
                 <section className="user-details" >
                    <div className="section-fields">
                        <label >UserName : </label>
                        <span>{name}</span><br/>
                    </div>
                    <div className="section-fields">
                        <label >EmailId : </label>
                        <span>{emailId}</span>
                    </div>
                    <div className="section-btn">
                        <button className='btn' onClick={()=>setPasswordEditor(flag=>!flag)}>Change Password</button>
                        <button className=' btn btn-logout' onClick={()=>logoutHandler(authDispatch,dispatch)}>Logout</button>
                    </div>    
            </section>
            {passwordEditor&&<EditPasswordModal setPasswordEditor={setPasswordEditor}/>}      
        </div>        

       )

}




export function EditPasswordModal({setPasswordEditor}){
    const{dispatch}=useStateContext()
    const[passwordState,passwordDispatcher]=useReducer(passwordReducer,{
        newPassword:'',
        confirmNewPassword:'',
        currentPassword:''
    })
    return(
        <form className='password-modal'onSubmit={(e)=>passwordChanger(e,passwordState,dispatch,setPasswordEditor)}>
            <div className="section-fields">
            <label >Current password : </label>
            <input onChange={(event)=>passwordDispatcher({type:'CURRENT_PASSWORD',payload:event.target.value})}type='password'/>
            </div>
            <div className="section-fields">
                <label  >New Password : </label>
                <input onChange={(event)=>passwordDispatcher({type:'NEW_PASSWORD',payload:event.target.value})} type='password'/>
            </div>
            <div className="section-fields">
                <label  >Confirm-New Password : </label>
                <input onChange={(event)=>passwordDispatcher({type:'CONFIRM_NEW_PASSWORD',payload:event.target.value})} type='password'/>
             </div>
            <button className='btn' type='submit'>Change</button>
        </form>
    )
}
