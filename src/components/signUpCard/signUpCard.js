import { useReducer, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/authContext";
import { errorHandler, formChecker } from "../../Reducer/formErrorReducer";
import {signUpreducer}  from '../../Reducer/signUpReducer'
import { InputFieldForPassword, Mask } from "./inputFieldForPAssword";
import './signUpCard.css'
export function SignUp(){
  const navigate = useNavigate();
  const{state:{login},dispatch}=useAuthContext()
  const [formState, formDispatch] = useReducer(signUpreducer, {
    fname: "",
    lname: "",
    emailId: "",
    password: "",
    confirmPassword: ""
  });
  const[mask,setMask]=useState(true)
  const [errorState,errorDispatch]=useReducer(errorHandler,{})
  const{fname}=formState;
  function clearingError(type){
    errorDispatch({type,payload:''})
  }

  function signUpHandler(
                            e,
                            fname
                          )
                              {
                                e.preventDefault();
                                if (formChecker(formState,errorDispatch)) {
                                  dispatch({type:'LOGIN',payload:fname})
                                  navigate('/profile')
                                } 
                                
                              }
  return (login ? <Navigate to='/profile'/>: 
      <div className="signup">
        <h2>SIGN-UP</h2><br/>
        <h4>sign up to watch amazing videos</h4><br/>
        <form
          onSubmit={(e) =>
            signUpHandler(
              e,
              fname
            )
          }
          className="signup-form"
        >
          <div>
              <label> First Name:</label>
                  <div className='input-error-div'>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        onChange={(event) =>
                          formDispatch({
                            type: "SET-FIRST-NAME",
                            payload: event.target.value
                          })
                        }
                        onFocus={()=>clearingError('SET_FNAME_ERR')}
                      />
                      <span style={{display:errorState.fname?"flex":'none'}} className='error-msg' >
                        <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                        {errorState.fname}
                      </span>
                  </div>
          </div>
          <div>
              <label> Last Name:</label>
              <div className='input-error-div'>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(event) =>
                    formDispatch({
                      type: "SET-LAST-NAME",
                      payload: event.target.value
                    })
                  }
                  onFocus={()=>clearingError('SET_LNAME_ERR')}

                />
                <span  style={{display:errorState.lname?"flex":'none'}}className='error-msg'>
                      <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                   {errorState.lname}
                  </span>
              </div>
          </div>
          <div>
              <label> Email-Id:</label>
              <div className='input-error-div'>
                    <input
                      type="email"
                      placeholder="Enter your Email-ID"
                      onChange={(event) =>
                        formDispatch({
                          type: "SET-EMAIL-ID",
                          payload: event.target.value
                        })
                      }
                      onFocus={()=>clearingError('SET_EMAIL_ERR')}
                    />
                    <span style={{display:errorState.emailId?"flex":'none'}} className='error-msg'>
                    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                      {errorState.emailId}</span>
              </div>
          </div>
          <div >
                 <label>Password:</label>
                 <div className='input-error-div'>
                      <InputFieldForPassword mask={mask}  clearingError={clearingError}  formDispatch={formDispatch} type="SET-PASSWORD"/>
                       <Mask mask={mask} setMask={setMask}/>
                       <span  style={{display:errorState.password?"flex":'none'}} className='error-msg'>
                       <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                         {errorState.password}</span>
               
                  </div>
            </div>
          <div>
                 <label>Confirm-Password:</label>
                 <div className='input-error-div'>
                      <InputFieldForPassword mask={mask} clearingError={clearingError} formDispatch={formDispatch} type="SET-CONFIRM-PASSWORD"/>
                      <Mask mask={mask} setMask={setMask}/>
                      <span  style={{display:errorState.confirmPassword?"flex":'none'}} className='error-msg'>
                      <svg width="1.2em" height="1.2em" viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7m0 2a5 5 0 0 0-5 5c0 1 0 3 5 9.71C17 12 17 10 17 9a5 5 0 0 0-5-5m-1 2h2v5h-2V6m0 7h2v2h-2v-2z" fill="currentColor"></path></svg>
                        {errorState.confirmPassword}</span>
                </div>
          </div>
          <button type="submit" className="btn-signIn">
            Sign Up
          </button><br/>
            <div className='signUp-footer'>
              Already have an account?
              <Link to='/login'>
               <span className='signUp' >LogIn here</span>
               </Link>
            </div>
        </form>
      </div>
    );
}


