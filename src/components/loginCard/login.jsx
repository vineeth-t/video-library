import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAuthContext } from '../../contexts/authContext';
import './loginCard.css'
export function Login(){
    const{login,loginInWithCredentials,setLogin}=useAuthContext();
    const {state}=useLocation();
    const navigate=useNavigate();
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('');

    function loginHandler(event,state,userName,password,navigate){
        event.preventDefault () 
        loginInWithCredentials(state,userName,password,navigate);
    }
    function logoutHandler(){
        setLogin(false)
        localStorage.removeItem('login')
    }
    return(
        
        <>{login?
            <div className='loginCard'>
                <div className='login-details'>
                    <svg fill='currentcolor' width="2.5em" height="2.5em"  viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.5.88 4.93 1.78A7.893 7.893 0 0 1 12 20c-1.86 0-3.57-.64-4.93-1.72m11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33A7.928 7.928 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.5-1.64 4.83M12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6m0 5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 12 8a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 11z"></path>
                    </svg>
                    {/* <h2>{userName}</h2> */}
                </div>               
                <button className='btn-logIn' onClick={logoutHandler}>Logout</button>
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