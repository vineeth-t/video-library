import './videoCard.css'
import { useThemeContext } from '../../contexts/themeContext';
export function VerticalVideoCard({video}){
    const {id,name,views,UploadedDate,likes,channelName,img}=video;
    const{themeColor}=useThemeContext()
    return  <div style={themeColor} className='video-card-vertical'>
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
}