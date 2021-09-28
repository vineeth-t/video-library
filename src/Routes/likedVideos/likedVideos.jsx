import {useLibraryContext} from '../../contexts/index'; 
import { VerticalVideoCard } from '../../components/index';
export function LikedVideos(){
    const {state:{likedVideo}}=useLibraryContext();
    return(
        <div className='liked-videos'>
            {!likedVideo?<div style={{color:"white"}}>No liked Videos </div>:
            <div>
                {likedVideo.map((video)=>{return <VerticalVideoCard video={video}/>})}
                </div>
}        
        </div>

    )
}