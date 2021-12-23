import {useStateContext,useThemeContext} from '../../contexts/index'; 
import { VerticalVideoCard } from '../../components/index';
import './likedVideos.css'
import { Link } from 'react-router-dom';
import { likeUnlikeVideo } from '../../components/axios/axios.serverRequest';
export function LikedVideos(){
    const {state:{likedVideo},dispatch}=useStateContext();
    const{theme}=useThemeContext();
    return(
        <>
            {likedVideo.length===0?
                <h3 style={{textAlign:"center"}}>No liked Videos </h3>:
            <div >
                {likedVideo.map((video)=>{
                    const{id}=video
                    return (
                            <div className='playlist-videos'>
                                <Link to={`/videoPlayer/${id}`}>
                                    <VerticalVideoCard video={video}/>
                                </Link>
                                <button className='btn-primary' onClick={()=>likeUnlikeVideo(id,dispatch)}>
                                    <svg className={theme==='light'?'svg-img-black':'svg-img'} aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"></path></svg>
                                </button>
                                <span className='toast-card'>Delete</span>
                            </div>
                        )
                    })}
                
             </div>
}           
        </>

    )
}