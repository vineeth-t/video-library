import { Route, Routes } from "react-router-dom";
import {
  LikedVideos,
  Home,
  Library,
  PrivateRoute,
  WatchLater,
  Profile,
  History
} from "./Routes/index";
import { NavBar } from "../src/components/index";
import{ShowIndividualPlayList} from '../src/components/playlist/showIndividualPlayList'
import { useThemeContext } from "./contexts/themeContext";
import { VideoPlayer } from "./components/index";
import { Login } from "./components/loginCard/login";
import{SignUp} from './components/signUpCard/signUpCard'
import { NavBottom } from "./components/navbar/navBottom/navBottom";
import { useEffect } from "react";
import {  useAuthContext, useStateContext } from "./contexts";
import {  getVideosFromDB } from "./components/axios/axios.serverRequest";
import { getHistoryFromDB,getLikedVideosFromDB, getPlaylistsFromDB } from "./components/axios";
function App() {
  const { themeColor } = useThemeContext();
  const{dispatch}=useStateContext();
  const{authDispatch:{token}}=useAuthContext()
  useEffect(()=>{
    getVideosFromDB(dispatch)
  },[dispatch])
  useEffect(()=>{
    getLikedVideosFromDB(dispatch);
    getHistoryFromDB(dispatch);
    getPlaylistsFromDB(dispatch)
  },[token,dispatch])
 

  return (
    <div style={themeColor} className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoPlayer/:videoId" element={<VideoPlayer />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signUp' element={<SignUp/>}/>
        <PrivateRoute path='/profile' element={<Profile/>}/>
        <PrivateRoute path="/library" element={<Library />} />
        <PrivateRoute path='/library/:playlistId' element={<ShowIndividualPlayList/>}/>
        <PrivateRoute path="/likedVideos" element={<LikedVideos/>} />
        <PrivateRoute path="/WatchLater" element={<WatchLater />} />
        <PrivateRoute path='/history' element={<History/>}/>
      </Routes>
      <NavBottom/>
    </div>
  );
}
export default App;
