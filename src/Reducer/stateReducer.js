import { videoList } from "../dataBase"
export function stateReducer(state,action){
    switch(action.type){
        case 'LIKED_VIDEO':
            if(state.likedVideo.some((video)=>video.id===action.videoId)){
                return {
                   
                    ...state,likedVideo:[...state.likedVideo.filter((video)=>video.id!==action.videoId)],toast:'Video UnLiked'
                }
            }
             //Instead of this we can use server calling to get likedVideos 
            return {...state,likedVideo:[...state.likedVideo,videoList.find((video)=>video.id===action.videoId)],toast:'Video Liked'}
        case 'REMOVE_FROM_LIKED_VIDEOS':
                return {...state,likedVideo:[...state.likedVideo.filter((video)=>video.id!==action.videoId)]}
              //Instead of this we can use server calling to get likedVideos  
        case 'HISTORY':
            if(state.history.some((video)=>video.id===action.payload.id)){
              return {...state}
            }
            return {
                ...state,history:[...state.history,action.payload]
            }
        case 'REMOVE_FROM_HISTORY':
            return {
                ...state,history:[...state.history.filter((video)=>video.id!==action.videoId)]
            }          
        case 'HAMBUG':
            return {...state,hambug:action.payload}
        case "TOAST":
            return{...state,toast:action.payload}
        case 'REMOVE_TOAST':
            return{...state,toast:''}
        default:
            return {...state}
        case 'CREATE_NEW_PLAYLIST':
            if(state.playlists.some((playlist)=>playlist.playListName===action.payload.playListName)){
                return {...state,toast:'Playlist Exists'}
            }
            return {...state,playlists:[...state.playlists,action.payload],toast:'Playlist Created'}
        case 'DELETE_PLAYLIST':
                return {...state,playlists:state.playlists.filter((playlist)=>playlist.playlistId!==action.payload),toast:'Playlist Deleted'}
        case 'ADD_TO_PLAYLIST':
            let playlistIndex=state.playlists.findIndex((playlist)=>playlist.playlistId===action.playlistId)
            state.playlists[playlistIndex]={...state.playlists[playlistIndex],
                listOfVideos:[...state.playlists[playlistIndex].listOfVideos,
                 action.videoPlayingNow]}
                                  
            return {...state,toast: 'Added to Playlist'};
        case 'REMOVE_FROM_PLAYLIST':
            let removePlaylistIndex=state.playlists.findIndex((playlist)=>playlist.playlistId===action.playlistId)
            state.playlists[removePlaylistIndex]={...state.playlists[removePlaylistIndex],
                listOfVideos:[...state.playlists[removePlaylistIndex].listOfVideos.filter((video)=>video.id!==action.videoId)]}
            return {...state,playlists:[...state.playlists],toast: 'Removed from Playlist'}
        case 'SET_NOTE_CONTENT':
            return {...state,note:action.payload}
        case 'SET_NEW_NOTES':
            return{...state,notesHolder:[...state.notesHolder,{videoId:action.videoId,listOfNotes:[action.listOfNotes]}],note:''}
        case 'ADD_TO_NOTES':
        const noteIndex=state.notesHolder.findIndex((notes)=>notes.videoId===action.videoId)
        console.log(noteIndex)
        state.notesHolder[noteIndex]={...state.notesHolder[noteIndex],
                    listOfNotes:[...state.notesHolder[noteIndex].listOfNotes,
                     action.InputNote]}
        return {...state,toast:'Note Added',note:''};
        case 'DELETE_NOTE':
            const noteIndexToBeDelted=state.notesHolder.findIndex((notes)=>notes.videoId===action.videoId)
            state.notesHolder[noteIndexToBeDelted]={...state.notesHolder[noteIndexToBeDelted],
                listOfNotes:[...state.notesHolder[noteIndexToBeDelted].listOfNotes?.filter((notes)=>notes.videoId!==action.videoId)]}
        return {...state,toast:'Note Deleted',note:''};  
    }
}
