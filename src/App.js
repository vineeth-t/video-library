
import { Route, Routes } from 'react-router-dom';
import{Home} from './Routes/index'
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
        </Routes>
        </div>
      );
    }
export default App;