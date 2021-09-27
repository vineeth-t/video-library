
import { Route, Routes } from 'react-router-dom';
import{Home, Library, LikedVideos} from './Routes/index'
import {NavBar} from '../src/components/index'
import { useThemeContext } from './contexts/themeContext';
import { VideoPlayer } from './components/index';
function App() {
  const{themeColor}=useThemeContext();
      return (
        <div style={themeColor} className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/videoPlayer/:videoId' element={<VideoPlayer/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/likedVideos' element={<LikedVideos/>}/>
          {/* 
          <Route path='/watchLater' element={<WatchLater/>}/>
          <Route path='/history' element={<History/>}/> */}
        </Routes>
        </div>
      );
    }
export default App;