export function loginReducer(state,{type,payload}){
    switch(type){
        case 'SET-USER-NAME':
            return {...state,userName:payload}
        case 'SET-PASSWORD':
            return{...state,password:payload}
        case 'LOGIN':
            return {...state,login:true,userName:payload.userName,token:payload.token}
        case 'LOGOUT':
            return {...state,login:false,userName:'',password:''}
        case 'SET_USER_DETAILS':
                return{...state,name:payload.firstname+payload.lastname,emailId:payload.username}
        default: 
            return {...state}
    }
}