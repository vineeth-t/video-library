import { VerticalVideoCard } from "../../components";
import { useStateContext } from "../../contexts";
import './watchLater.css'

export function WatchLater(){
        const {state:{playlists}}=useStateContext();
        const watchLater=playlists.find((playlist)=>playlist.playListName==='WatchLater')
        return(
            <div className='watch-later'>
                  {watchLater&&<div style={{color:"black"}}>Add here to watch later </div>}
               {watchLater.listOfVideos.map((video)=><VerticalVideoCard video={video}/>)}
            </div>
        )

}