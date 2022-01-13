export function stateReducer(state,{type,payload}){
    switch(type){
        case 'SET_VIDEOS':
            return{...state,videoList:payload}
        case 'SET_LIKED_VIDEOS':
            return {...state,likedVideos:payload.liked,toast:payload.message}
        case 'SET_HISTORY':
            return {
                ...state,history:payload
            } 
        case "TOAST":
            return{...state,toast:payload}
        case 'REMOVE_TOAST':
            return{...state,toast:''}
        case 'SET_PLAYLISTS':
            return {...state,playlists:payload,toast:payload.msg}  
        case 'SET_NOTE_CONTENT':
            return {...state,note:payload}
         case 'SET_NOTES':
                return{...state,notesFolder:payload,note:''}    
        default:
                return {...state}
            
    }
}
