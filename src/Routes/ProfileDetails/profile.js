import { useReducer, useState } from "react";
import { passwordChanger } from "../../components/axios";
import { useAuthContext, useStateContext } from "../../contexts"
import { passwordReducer } from "../../Reducer/editPasswordReducer";
import './profile.css'
export function logoutHandler(authDispatch,dispatch){
    authDispatch({type:'LOGOUT'})
    dispatch({type:'TOAST',payload:'Logout success'})
    localStorage.removeItem('login')
}
export function Profile(){
    const{authState:{userName,emailId},authDispatch}=useAuthContext();
    console.log(userName)
    const{dispatch}=useStateContext();
    const[passwordEditor,setPasswordEditor]=useState(false)
    return( 
            <div>
                 <section className="user-details" >
                    <div className="section-fields">
                        <label >Name : </label>
                        <span>{userName}</span><br/>
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
