import { useParams } from "react-router";
import { useStateContext } from "../../contexts";
import {AddOrRemoveFromPlaylist} from "../axios/axios.serverRequest"
export function PlaylistModal({videoPlayingNow}) {
    const{videoId}=useParams()
    
    const {state:{playlists},dispatch}=useStateContext();
  return  playlists.map(({playListName,playListId})=>(
       <label style={{color:'black'}}>    
            <input type='checkbox' checked={checkBoxChanger(playlists,playListId,videoId)}
             onChange={()=>AddOrRemoveFromPlaylist(playlists,playListId,dispatch,videoPlayingNow)}/>
            <span>{playListName}</span>
        </label>
  ))}

  export function checkBoxChanger(playlists,playListId,videoId){
    const playlistOpened = playlists.find((playlist)=>playlist.playListId===playListId)  
    return playlistOpened.listOfVideos.some((video)=>video.id===videoId)?true:false
   
  }