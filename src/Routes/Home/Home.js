import {videoList} from '../../dataBase'
import{VideoCard} from '../../components/index';
import './videoList.css'
export function Home(){  
 
    return(
        <div className='video-list'>
            {videoList.map((video)=>{return <VideoCard video={video}/>})}
        </div>
    )
}