import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/authContext';
import { Profile } from '../../Routes';
import './loginCard.css'
export function Login(){
    const{state:{login,userName,password},dispatch, loginInWithCredentials}=useAuthContext();
    const {state}=useLocation();
    const navigate=useNavigate();

    function loginHandler(event,state,userName,password,navigate){
        event.preventDefault () 
        loginInWithCredentials(state,userName,password,navigate);
    }
    return(
        <>
        {login?<Profile/>:
            <form className='loginCard' onSubmit={(event)=>loginHandler(event,state,userName,password,navigate)}>
                <div >
                    <label> UserName : </label>
                    <input type='text' onChange={(event)=>dispatch({type:'SET-USER-NAME',payload:event.target.value})}/>
                </div>
                <div>
                    <label>Password : </label>
                    <input type='password' onChange={(event)=>dispatch({type:'SET-PASSWORD',payload:event.target.value})}/>
                </div>
                <button className='btn-logIn'>LogIn</button>
                <div >
                New user?
                <Link to='/signUp'>
                     <span className='signUp'>SignUp</span>
                </Link>
            </div>
            </form>
}
        </>
    )
}