import { Route, Routes } from "react-router-dom";
import {
  LikedVideos,
  Home,
  Library,
  PrivateRoute,
  WatchLater,
  Profile
} from "./Routes/index";
import { NavBar } from "../src/components/index";
import { useThemeContext } from "./contexts/themeContext";
import { VideoPlayer } from "./components/index";
import { Login } from "./components/loginCard/login";
import{SignUp} from './components/signUpCard/signUpCard'
function App() {
  const { themeColor } = useThemeContext();
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
        <PrivateRoute path="/likedVideos" element={<LikedVideos/>} />
        <PrivateRoute path="/watchLater" element={<WatchLater />} />
      </Routes>
    </div>
  );
}
export default App;
