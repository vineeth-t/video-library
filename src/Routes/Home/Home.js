import{VideoCard} from '../../components/index';
import '../../components/videoCard/videoCard.css'
import { useStateContext } from '../../contexts';
export function Home(){  
    const {state:{videoList}}=useStateContext();
    return(
        <div className='video-list'>
            {videoList.map((video)=>{return <VideoCard video={video}/>})}
        </div>
    )
}