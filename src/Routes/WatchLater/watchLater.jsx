import { VerticalVideoCard } from "../../components";
import { useStateContext } from "../../contexts";
import '../likedVideos/likedVideos.css'
export function WatchLater(){
        let type='REMOVE_FROM_PLAYLIST'
        const {state:{playlists}}=useStateContext();
        const watchLater=playlists.find((playlist)=>playlist.playListName==='WatchLater')
        return(
            <div className='playlist-videos'>
                  {watchLater.listOfVideos.length===0&&<h3 style={{color:"black"}}>Add here to watch later </h3>}
               {watchLater.listOfVideos.map((video)=><VerticalVideoCard playListId={watchLater.playListId} type={type}video={video}/>)}
            </div>
        )

}