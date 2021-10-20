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
            if(state.history.some((video)=>video.id===action.payload.videoId)){
                console.log(true)
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
        case 'REMOVE_TOAST':
            return{...state,toast:''}
        default:
            return {...state}
        case 'CREATE_NEW_PLAYLIST':
            return {...state,playlists:[...state.playlists,action.payload],toast:'Playlist Created'}
        case 'ADD_TO_PLAYLIST':
            let playlistIndex=state.playlists.findIndex((playlist)=>playlist.playlistId===action.playlistId)
            state.playlists[playlistIndex]={...state.playlists[playlistIndex],
                                            listOfVideos:[...state.playlists[playlistIndex].listOfVideos,
                                             action.videoPlayingNow]}
            return state;
        case 'REMOVE_FROM_PLAYLIST':
           
            let removePlaylistIndex=state.playlists.findIndex((playlist)=>playlist.playlistId===action.playlistId)
            state.playlists[removePlaylistIndex]={...state.playlists[removePlaylistIndex],
                                             listOfVideos:[...state.playlists[removePlaylistIndex].listOfVideos.filter((video)=>video.id!==action.videoId)]}
          return {...state,playlists:[...state.playlists,state.playlists[removePlaylistIndex]]}
    }
}
