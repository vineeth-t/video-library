import {useStateContext} from '../../contexts/index'
import { NavLink } from 'react-router-dom';
import { useThemeContext } from '../../contexts/themeContext';
import axios from 'axios';

export function VideoCard({video}){
    const{dispatch}=useStateContext()
    const {id,name,views,UploadedDate,channelName,img}=video;
    const{themeColor}=useThemeContext()
    const historyHandler=async(dispatch,video)=>{
        try{
            const response= await axios.post(`https://video-library-server.vineetht.repl.co/history/${video.id}`,video)
            if(response.status===201){
                dispatch({type:'ADD_TO_HISTORY',payload:video})
            }
        }catch(error){
            console.log(error)
        }
   
    } 
    return(
    <NavLink to={`/videoPlayer/${id}`}>
             <div style={themeColor} className='video-card' onClick={()=>historyHandler(dispatch,video)}>
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
