import {  useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/authContext';
import './loginCard.css'
export function Login(){
    const{login,loginInWithCredentials}=useAuthContext();
    const {state}=useLocation();
    const navigate=useNavigate();
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');

    function loginHandler(event,state,userName,password,navigate){
        event.preventDefault () 
        loginInWithCredentials(state,userName,password,navigate);
    }
    return(
        
        <>{login?
            <div>
                <button className='btn-logIn'>Logout</button>
            </div>:
            <form className='loginCard' onSubmit={(event)=>loginHandler(event,state,userName,password,navigate)}>
                <div >
                    <label> UserName : </label>
                    <input type='text' onChange={(event)=>setUserName(event.target.value)}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button className='btn-logIn'>LogIn</button>
            </form>
}
        </>
    )
}