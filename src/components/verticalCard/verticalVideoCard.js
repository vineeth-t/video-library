import { useThemeContext } from '../../contexts/index';
import './verticalCard.css'
export function VerticalVideoCard({video}){
    const {id,name,views,UploadedDate,channelName}=video;
    const{themeColor}=useThemeContext();
    return( 

             <div style={themeColor} className='videoCard-vertical'>
                  <img className='videoCard-thumbanil' src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt='thumbnail'/>
                        <div className='videoCard-details'>
                            <h5>{name}</h5>
                            <h5>{channelName}</h5>
                            <div style={{display:'flex'}}>
                                <h6>{views} views .</h6>
                                <h6>{UploadedDate}</h6>
                            </div>
                         </div>
                </div>
    )
}