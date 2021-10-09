export function loginReducer(state,{type,payload}){
    switch(type){
        case 'SET-USER-NAME':
            return {...state,userName:payload}
        case 'SET-PASSWORD':
            return{...state,password:payload}
        case 'LOGIN':
            return {...state,login:true,userName:payload}
        case 'LOGOUT':
            return {...state,login:false,userName:'',password:''}
        default: 
            return {...state}
    }
}