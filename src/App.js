import { Route, Routes } from "react-router-dom";
import {
  LikedVideos,
  Home,
  Library,
  PrivateRoute,
  WatchLater
} from "./Routes/index";
import { NavBar } from "../src/components/index";
import { useThemeContext } from "./contexts/themeContext";
import { VideoPlayer } from "./components/index";
import { Login } from "./components/loginCard/login";

function App() {
  const { themeColor } = useThemeContext();
  return (
    <div style={themeColor} className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videoPlayer/:videoId" element={<VideoPlayer />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/library" element={<Library />} />
        <PrivateRoute path="/likedVideos" element={<LikedVideos/>} />
        <PrivateRoute path="/watchLater" element={<WatchLater />} />
      </Routes>
    </div>
  );
}
export default App;
