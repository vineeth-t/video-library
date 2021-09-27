import { useThemeContext } from '../../contexts/themeContext'
import './library.css'
export function Library(){
    const{themeColor}=useThemeContext()
    return<div style={themeColor} className='library-list'>
            <div>Liked</div>
            <div>PlayList</div>
             <div>WatchLater</div>       
    </div>
}