import { Link } from 'react-router-dom'
import { useThemeContext } from '../../contexts/themeContext'
import './library.css'
export function Library(){
    const{themeColor}=useThemeContext()
    return<div style={themeColor} className='library-list'>
            <Link to='/likedVideos'>
                <div className='library-link'>Liked</div>
            </Link>
            <div className='library-link'>PlayList</div>
            <div className='library-link'>WatchLater</div>       
    </div>
}