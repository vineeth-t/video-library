export function stateReducer(state,action){
    switch(action.type){
        case 'SET_VIDEOS':
            return{...state,videoList:action.payload}
        case 'LIKED_VIDEO':
            if(state.likedVideo.some((video)=>video.id===action.videoId)){
                return {
                   
                    ...state,likedVideo:[...state.likedVideo.filter((video)=>video.id!==action.videoId)],toast:'Video UnLiked'
                }
            }
             //Instead of this we can use server calling to get likedVideos 
            return {...state,likedVideo:[...state.likedVideo,state.videoList.find((video)=>video.id===action.videoId)],toast:'Video Liked'}
        case 'REMOVE_FROM_LIKED_VIDEOS':
                return {...state,likedVideo:[...state.likedVideo.filter((video)=>video.id!==action.videoId)]}
              //Instead of this we can use server calling to get likedVideos  
        case 'SET_HISTORY':
            return {
                ...state,history:action.payload
            }
           
        case 'HAMBUG':
            return {...state,hambug:action.payload}
        case "TOAST":
            return{...state,toast:action.payload}
        case 'REMOVE_TOAST':
            return{...state,toast:''}
        case 'SET_PLAYLISTS':
            return {...state,playlists:action.payload}
        case 'DELETE_PLAYLIST':
                return {...state,playlists:state.playlists.filter((playlist)=>playlist.playlistId!==action.payload),toast:'Playlist Deleted'}
       
      
        case 'SET_NOTE_CONTENT':
            return {...state,note:action.payload}
        case 'SET_NEW_NOTES':
            return{...state,notesHolder:[...state.notesHolder,{videoId:action.videoId,listOfNotes:[action.listOfNotes]}],note:''}
        case 'ADD_TO_NOTES':
            const tempNotes=[...state.notesHolder]
            const noteIndex=tempNotes.findIndex((notes)=>notes.videoId===action.videoId)
            tempNotes[noteIndex]={...tempNotes[noteIndex],
            listOfNotes:[...tempNotes[noteIndex].listOfNotes,
             action.InputNote]}
        //this is important you should return notesholder along with state to avoid duplicates
        return {...state,notesHolder:tempNotes,toast:'Note Added',note:''};
        case 'DELETE_NOTE':
            const removingNotes=[...state.notesHolder]
            const removingNoteIndex=removingNotes.findIndex((notes)=>notes.videoId===action.videoId)
            removingNotes[removingNoteIndex]={...removingNotes[removingNoteIndex],
                listOfNotes: [...removingNotes[removingNoteIndex].listOfNotes.filter((notes)=>notes.noteId!==action.noteId)]
            }
            return {...state,notesHolder:removingNotes,toast:'Notes Deleted'}
        default:
                return {...state}
            
    }
}
