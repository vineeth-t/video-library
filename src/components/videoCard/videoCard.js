// import { useLibraryContext } from '../../Context';
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../../contexts/themeContext';

export function VideoCard({video}){
    const {id,name,views,UploadedDate,likes,channelName,img}=video;
    const{themeColor}=useThemeContext()
    // const {dispatch}=useLibraryContext();
 
    return(
    <NavLink to={`/videoPlayer/${id}`}>
             <div style={themeColor} className='video-card'>
                      <img className='thumbnail' src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} />
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
