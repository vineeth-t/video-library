import { useParams } from "react-router";
import { useStateContext } from "../../contexts";
export function PlaylistModal({videoPlayingNow}) {
    const{videoId}=useParams()
    const {state:{playlists},dispatch}=useStateContext();
    function findingVideoInPlaylist(playlistId,videoId){
      const x=playlists.find((playList)=>playList.playlistId===playlistId)
      return x.listOfVideos.some(({id})=>id===videoId)?true:false
    }
    function checkBoxChecker(playlistId,videoId){
         if(findingVideoInPlaylist(playlistId,videoId)){
          dispatch({type:'REMOVE_FROM_PLAYLIST',playlistId:playlistId,videoId:videoId})

         }else{
          dispatch({type:'ADD_TO_PLAYLIST',playlistId:playlistId,videoPlayingNow:videoPlayingNow})
         }
    }
  return  playlists.map(({playListName,playlistId})=>(
       <label style={{color:'black'}}>    
            <input type='checkbox' checked={findingVideoInPlaylist(playlistId,videoId)} onChange={()=>{
              checkBoxChecker(playlistId,videoId)
            }}
              />
            <span>{playListName}</span>
        </label>
  ))}
