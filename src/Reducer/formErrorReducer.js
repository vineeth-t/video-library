
export function formChecker(formState,errorDispatch){
  const { fname, lname, emailId, password, confirmPassword } = formState;
let flag=true;
if(fname===''|| !/^[a-zA-Z]+(\s*\w*)*$/.test(fname)){
  errorDispatch({type:'SET_FNAME_ERR',payload:'First Name Required'})
  flag=false
} if(lname===''|| !/^[a-zA-Z]+(\s*\w*)*$/.test(fname) ){
  errorDispatch({type:'SET_LNAME_ERR',payload:'Last Name Required'})
  flag=false
}
if(emailId===''|| !/^.+@.+\.com$/.test(emailId)){
  errorDispatch({type:'SET_EMAIL_ERR',payload:'Email Id Name Required'})
  flag=false;
} 
 if(password===''|| !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(password)){  
  errorDispatch({type:'SET_PASSWORD_ERR',payload:'Alphanumeric(small,captial letters and length >8)'})
  flag=false
}
if(confirmPassword!==password ){
  errorDispatch({type:'SET_CONFIRM_PASSWORD_ERR',payload:'Password not Matching'})
  flag=false
}
return flag;

}
export function errorHandler(state,{type,payload}){
  switch(type){
    case 'SET_FNAME_ERR':
        return {...state,fname:payload}
    case 'SET_LNAME_ERR':
          return {...state,lname:payload}
    case'SET_EMAIL_ERR':
          return {...state,emailId:payload}
    case'SET_PASSWORD_ERR':
          return {...state,password:payload}
    case 'SET_CONFIRM_PASSWORD_ERR':
          return {...state,confirmPassword:payload}
    case 'CLEARING_ERROR':
          return {}
    default:
      return state
  }
}