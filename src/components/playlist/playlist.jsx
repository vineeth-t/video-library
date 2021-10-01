
import { useState } from "react";
import { useStateContext, useThemeContext } from "../../contexts";
import { videoList } from "../../dataBase";
import './playlist.css'
export function getVideoFromDataBase(videoList,videoId){
 
    console.log( videoList.find((video)=>video.id===videoId))
  }
export function CreatePlaylist({videoId}){
    const videoPlayingNow=getVideoFromDataBase(videoList,videoId)
    const{themeColor}=useThemeContext()
    const {state:{playlist},dispatch}=useStateContext();
    const[createNewPlaylist,setNewPlaylist]=useState(false);
    const[newPlayListName,setNewPlayListName]=useState('')
    function playlistCreator(e){
        e.preventDefault();
        dispatch({type:'createNewPlaylist',name:newPlayListName})
    }
return(
    <div style={themeColor}className='playlist-card'>
        <div className='playlist'>
            <label>
                <input type='checkbox' onChange={()=>dispatch({type:'watchLater',video:videoPlayingNow})}/>
                watch Later
            </label>
            <label style={{display:createNewPlaylist ?"none":"block"}}onClick={()=>setNewPlaylist(true)}>
                     <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path>
                    </svg>
                    Add New Playlist
            </label>
            {createNewPlaylist&&
            <form onClick={(event)=>playlistCreator(event)} className='playlist-creator'>
                    <input type='text' onChange={(e)=>setNewPlayListName(e.target.value)}/>
                    <button className='btn-submit'type='submit'> 
                            <svg width="1.5em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path>
                            </svg>Add New Playlist
                    </button>
            </form>
          }
        </div> 
    </div>)
}