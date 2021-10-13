import { useStateContext } from "../../contexts";

export function Playlists({videoPlayingNow}) {
    const {state:{playlists},dispatch}=useStateContext();
  return  playlists.map(({playListName,playlistId})=>(
       <label style={{color:'black'}} >    
            <input type='checkbox' onChange={()=>dispatch({type:'ADD_TO_PLAYLIST',playlistId:playlistId,videoPlayingNow:videoPlayingNow})}/>
            <span>{playListName}</span>
        </label>
  ))}
