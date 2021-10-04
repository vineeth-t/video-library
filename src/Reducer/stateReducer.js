import { videoList } from "../dataBase"
export function stateReducer(state,action){
    switch(action.type){
        case 'likedVideo':
            if(state.likedVideo.some((video)=>video.id===action.videoId)){
                return {
                   
                    ...state,likedVideo:[...state.likedVideo.filter((video)=>video.id!==action.videoId)],toast:'Video UnLiked'
                }
            }
             //Instead of this we can use server calling to get likedVideos 
            return {...state,likedVideo:[...state.likedVideo,videoList.find((video)=>video.id===action.videoId)],toast:'Video Liked'}
        case 'removeFromLikedVideos':
                return {...state,likedVideo:[...state.likedVideo.filter((video)=>video.id!==action.videoId)]}
        case 'watchLater':
            if(state.watchLater.some((video)=>video.id===action.videoId)){
                return {
                    ...state,toast:'alreadyInWatchLater',watchLater:[...state.watchLater.filter((video)=>video.id!==action.videoId)]
                }
            }
              //Instead of this we can use server calling to get likedVideos 
            return {...state,watchLater:[...state.watchLater,videoList.find((video)=>video.id===action.videoId)],toast:'Added To WatchLater'}
        case 'hambug':
            return {...state,hambug:action.payload}
        case 'removeToast':
            return{...state,toast:''}
        default:
            return {...state}
        case 'createNewPlaylist':
            return {...state,playlist:[...state.playlist,action.payload],toast:'Playlist Created'}
        case 'addToPlayList':
            let videoToBeAddedInThePlaylist={...state.playlist.find((playlist)=>playlist.playlistId===action.playlistId)};
            let videoId=action.videoId
           return {...state,playlist:[{...videoToBeAddedInThePlaylist,
                                                    listOfVideos:[videoToBeAddedInThePlaylist.listOfVideos,videoId]}
                    ]}
    }
}
