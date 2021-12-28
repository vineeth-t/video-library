import {useStateContext} from '../../contexts/index'
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../../contexts/themeContext';
import {historyHandler} from '../axios/axios.serverRequest'
export function VideoCard({video}){
    const{dispatch}=useStateContext()
    const {_id,id,name,views,UploadedDate,channelName,img}=video;
    const{themeColor}=useThemeContext()
    return(
    <NavLink to={`/videoPlayer/${id}`}>
             <div style={themeColor} className='video-card' onClick={()=>historyHandler(dispatch,_id)}>
                      <img className='thumbnail' src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt='thumbnail' />
                      <div className='video-details'>
                            <div>
                                <img className='profile-icon' src={`${img}`} alt='profile-icon'/>
                            </div>
                            <div className='video-content'>
                                <h5>{name}</h5>
                                <h5>{channelName}</h5>
                                <div style={{display:'flex'}}>
                                <h6>{views} views .</h6>
                                <h6>{UploadedDate}</h6>
                            </div>
                        </div>
                      </div>  
                </div>
        </NavLink>
           
    )
}
