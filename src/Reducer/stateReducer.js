import { videoList } from "../dataBase"
export function stateReducer(state,action){
    console.log('hello')
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
            if(state.watchLater.some((video)=>video.id===action.video.id)){
                return {
                    ...state,toast:'alreadyInWatchLater',playlist:''
                }
            }
            return {...state,watchLater:[...state.watchLater,action.video],toast:'Added To WatchLater'}
        case 'hambug':
            return {...state,hambug:action.payload}
        case 'removeToast':
            return{...state,toast:''}
        default:
            return {...state}
        // case 'createNewPlaylist':
        //     return {...state,playlist:playlist.concat(action.name)}
    }
}
