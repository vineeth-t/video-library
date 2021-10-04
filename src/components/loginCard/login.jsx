import {  useState } from 'react';
import './loginCard.css'
export function Login(){
    const[userName,setUserName]=useState('');
    const[password,setPassword]=useState('')
    return(
        
        // <>{loginStatus?.userLoginStatus?<div>
        //     <button className='btn-logIn' onClick={logoutHandler}>Logout</button>
        // </div>:
        <>
            <form className='loginCard'>
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
    
        </>
    )
}