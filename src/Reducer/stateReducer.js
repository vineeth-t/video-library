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
              //Instead of this we can use server calling to get likedVideos 
           
        case 'hambug':
            return {...state,hambug:action.payload}
        case 'removeToast':
            return{...state,toast:''}
        default:
            return {...state}
        case 'createNewPlaylist':
            return {...state,playlists:[...state.playlists,action.payload],toast:'Playlist Created'}
        case 'addToPlaylist':
            let playlistIndex=state.playlists.findIndex((playlist)=>playlist.playlistId===action.playlistId)
            state.playlists[playlistIndex]={...state.playlists[playlistIndex],
                                            listOfVideos:[...state.playlists[playlistIndex].listOfVideos,
                                             action.videoPlayingNow]}
            return state;
        case 'removeFromPlaylist':
           
            let removePlaylistIndex=state.playlists.findIndex((playlist)=>playlist.playlistId===action.playlistId)
            state.playlists[removePlaylistIndex]={...state.playlists[removePlaylistIndex],
                                             listOfVideos:[...state.playlists[removePlaylistIndex].listOfVideos.filter((video)=>video.id!==action.videoId)]}
          return {...state,playlists:[...state.playlists,state.playlists[removePlaylistIndex]]}
    }
}
