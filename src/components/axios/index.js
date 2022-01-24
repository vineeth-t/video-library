export {
  getNotesFromDB,
  deleteNotesByIndex,
  notesHandler
} from "./axios.notes";
export {
  AddOrRemoveFromPlaylist,
  deletePlaylist,
  getPlaylistsFromDB,
  addNewPlaylist
} from "./axios.playlist";
export { historyHandler, getHistoryFromDB } from "./axios.history";
export {
  getVideosFromDB,
  findCurrentVideo,
  likeUnlikeVideo,
  getLikedVideosFromDB
} from "./axios.serverRequest";
export {
  signUpHandler,
  loginHandler,
  passwordChanger
} from "./axios.loginSignUp.handler";
