
import { Route, Routes } from 'react-router-dom';
import{Home} from './Routes/index'
import {NavBar} from '../src/components/index'
import { useThemeContext } from './contexts/themeContext';
function App() {
  const{themeColor}=useThemeContext();
      return (
        <div style={themeColor} className="App">
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </div>
      );
    }
export default App;