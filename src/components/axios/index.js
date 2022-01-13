export {getNotesFromDB,deleteNotesById,notesHandler} from './axios.notes';
export{AddOrRemoveFromPlaylist,deletePlaylist,getPlaylistsFromDB,addNewPlaylist} from './axios.playlist'
export{historyHandler,getHistoryFromDB} from './axios.history'
export{setAuthorizationHeaderForServieCalls,getVideosFromDB,findCurrentVideo,likeUnlikeVideo,getLikedVideosFromDB,expectionHandlerForServiceCalls} from './axios.serverRequest'
export{signUpHandler,loginHandler} from './axios.loginSignUp.handler'
