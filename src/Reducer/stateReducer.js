export function stateReducer(state,action){
    switch(action.type){
        case 'SET_VIDEOS':
            return{...state,videoList:action.payload}
        case 'SET_LIKED_VIDEOS':
            return {...state,likedVideos:action.payload}
        case 'SET_HISTORY':
            return {
                ...state,history:action.payload
            } 
        case "TOAST":
            console.log("toast",action.payload)
            return{...state,toast:action.payload}
        case 'REMOVE_TOAST':
            return{...state,toast:''}
        case 'SET_PLAYLISTS':
            return {...state,playlists:action.payload,toast:action.msg}  
        case 'SET_NOTE_CONTENT':
            return {...state,note:action.payload}
         case 'SET_NOTES':
                return{...state,notesHolder:action.payload,note:''}    
        default:
                return {...state}
            
    }
}
