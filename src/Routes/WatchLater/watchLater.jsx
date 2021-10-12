import { VerticalVideoCard } from "../../components";
import { useStateContext } from "../../contexts";
import './watchLater.css'

export function WatchLater(){
        let type='removeFromPlaylist'
        const {state:{playlists}}=useStateContext();
        const watchLater=playlists.find((playlist)=>playlist.playListName==='WatchLater')
        console.log("state from watchlater",playlists,watchLater)
        return(
            <div className='watch-later'>
                  {watchLater&&<div style={{color:"black"}}>Add here to watch later </div>}
               {watchLater.listOfVideos.map((video)=><VerticalVideoCard playListId={watchLater.playListId} type={type}video={video}/>)}
            </div>
        )

}