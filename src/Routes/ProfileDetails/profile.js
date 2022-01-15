import axios from "axios";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { API } from "../../components/axios/axios.serverRequest";
import { useAuthContext, useStateContext } from "../../contexts"
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
               const {data:{response,firstname,lastname,username}}= await axios.get(`${API}/user`) ;
              if(response){
                  authDispatch({type:'SET_USER_DETAILS',payload:{firstname,lastname,username}})
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
            {passwordEditor&&<EditPasswordModal/>}      
        </div>        

       )

}

export function EditPasswordModal(){
    return(
        <form >
            <label >Current password : </label>
            <input type='password'/>
            <label >New Password : </label>
            <input type='password'/>
            <label >Confirm-New Password : </label>
             <input type='password'/>
     
        </form>
    )
}
