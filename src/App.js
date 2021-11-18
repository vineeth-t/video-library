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
import axios from "axios";
import { useStateContext } from "./contexts";
function App() {
  const { themeColor } = useThemeContext();
  const{dispatch}=useStateContext();
  useEffect(()=>{
    (async function(){
              try{
                const {data:{response}}=await axios.get('https://video-library-server.vineetht.repl.co/videos')
                dispatch({type:'SET_VIDEOS',payload:response})
              }catch(error){
                console.log(error);
                dispatch({type:'TOAST',payload:'Refresh the Page'})
              }
        })()
  },[dispatch])
  useEffect(()=>{
    (async function(){
              try{
                const {data:{response}}=await axios.get('https://video-library-server.vineetht.repl.co/playlists')
                dispatch({type:'SET_PLAYLISTS',payload:response})
              }catch(error){
                console.log(error);
                dispatch({type:'TOAST',payload:'Refresh the Page'})
              }
        })()
  },[dispatch])
  useEffect(()=>{
    (async function(){
              try{
                const {data:{response}}=await axios.get('https://video-library-server.vineetht.repl.co/history')
                dispatch({type:'SET_HISTORY',payload:response})
              }catch(error){
                console.log(error);
                dispatch({type:'TOAST',payload:'Refresh the Page'})
              }
        })()
  },[dispatch])
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
        <PrivateRoute path='/:libraryId' element={<ShowIndividualPlayList/>}/>
        <PrivateRoute path="/likedVideos" element={<LikedVideos/>} />
        <PrivateRoute path="/WatchLater" element={<WatchLater />} />
        <PrivateRoute path='/history' element={<History/>}/>
      </Routes>
      <NavBottom/>
    </div>
  );
}
export default App;
