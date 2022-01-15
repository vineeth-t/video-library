export function passwordReducer(state,{type,payload}){
    console.log(type,payload)
    switch(type){
        case 'NEW_PASSWORD':
            return{...state,newPassword:payload}
        case 'CONFIRM_NEW_PASSWORD':
             return{...state,confirmNewPassword:payload}
        case 'CURRENT_PASSWORD':
             return{...state,currentPassword:payload}
        default :
            return state
    }
}