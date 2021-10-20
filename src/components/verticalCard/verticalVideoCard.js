import { useStateContext,useThemeContext } from '../../contexts/index';
import './verticalCard.css'
export function VerticalVideoCard({video,type,playListId}){
    const {id,name,views,UploadedDate,channelName}=video;
    const{theme,themeColor}=useThemeContext();
    const{dispatch}=useStateContext()
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
                            <div >
                                <button className='btn-primary'>
                                <svg className={theme==='light'?'svg-img-black':'svg-img'} aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M20.7 7c.4-.4.4-1 0-1.4l-2.3-2.3c-.4-.4-1-.4-1.4 0l-1.8 1.8L19 8.9M3 17.2V21h3.8l11-11.1l-3.7-3.8L3 17.2M7 2v3h3v2H7v3H5V7H2V5h3V2h2z"></path></svg></button>
                               <button className='btn-primary'>
                                    <svg className={theme==='light'?'svg-img-black':'svg-img'} onClick={()=>dispatch({type:type,videoId:id,playListId:playListId})}aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"></path></svg>
                            </button>
                            </div>
                         </div>
                </div>
    )
}