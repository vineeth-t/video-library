import { VerticalVideoCard } from "../../components/verticalCard/verticalVideoCard";
import { Link } from 'react-router-dom';
import {useStateContext,useThemeContext} from '../../contexts/index'; 
import '../likedVideos/likedVideos.css'
export function History(){
const{state:{history}}=useStateContext();
const{theme}=useThemeContext();
const{dispatch}=useStateContext()
    return(
        <div className='playlist-videos'>
         <h3>History</h3>
          {history.map((video)=>{
          const{id}=video
                    return (
                            <div className='playlist-videos'>
                                <Link to={`/videoPlayer/${id}`}>
                                    <VerticalVideoCard video={video}/>
                                </Link>
                                <button className='btn-primary' onClick={()=>dispatch({type:'REMOVE_FROM_HISTORY',videoId:id})}>
                                    <svg className={theme==='light'?'svg-img-black':'svg-img'} aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"></path></svg>
                                </button>
                                <span className='toast-card'>Delete</span>
                            </div>
                        )
                    }
          )}
        </div>
    )
}