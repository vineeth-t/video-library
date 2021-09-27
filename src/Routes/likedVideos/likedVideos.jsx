import {useLibraryContext} from '../../contexts/index';
import {VideoCard} from '../../components/index'
import './likedVideos.css'


export function LikedVideos(){
    const {state:{likedVideo}}=useLibraryContext();
    return(
        <div className='liked-videos'>
            {!likedVideo?<div style={{color:"white"}}>No liked Videos </div>:
            <div>
                {likedVideo.map((video)=>{return <VideoCard video={video}/>})}
                </div>
}        
        </div>

    )
}