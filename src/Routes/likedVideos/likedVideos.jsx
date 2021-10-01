import {useStateContext} from '../../contexts/index'; 
import { VerticalVideoCard } from '../../components/index';
import './likedVideos.css'
export function LikedVideos(){
    const {state}=useStateContext();
    return(
        < >
            {state.likedVideo.length===0?
                <h3 style={{textAlign:"center"}}>No liked Videos </h3>:
            <div className='liked-videos'>
                {state.likedVideo.map((video)=>{return <VerticalVideoCard video={video}/>})}
             </div>
}        
        </>

    )
}