import { VerticalVideoCard } from "../../components/verticalCard/verticalVideoCard";
import { useStateContext } from "../../contexts";
import '../likedVideos/likedVideos.css'
export function History(){
const{state:{history}}=useStateContext();
const type='REMOVE_FROM_HISTORY'
    return(
        <div className='playlist-videos'>
         <h3>History</h3>
          {history.map((video)=><VerticalVideoCard video={video} type={type}/>)}
        </div>
    )
}