
import { useState } from "react";
import { useStateContext } from "../../contexts";
import './playlist.css'
import { Playlists } from "./showPlaylists";
export function CreateNewPlaylist({videoPlayingNow,setPlaylistContainer}){
    const {dispatch}=useStateContext();
    const[createNewPlaylist,setNewPlaylist]=useState(false);
    const[newPlayListName,setNewPlayListName]=useState()
    function playlistCreator(dispatch,videoPlayingNow,newPlayListName,setNewPlayListName){
        if(newPlayListName===''||newPlayListName===undefined ){
            alert('Enter a name')
        }else{
            dispatch({type:'CREATE_NEW_PLAYLIST',payload:{playListName:newPlayListName,playlistId:newPlayListName,listOfVideos:[videoPlayingNow]}})
            setNewPlayListName('')
        }
       
    }  
return(
    <div className='playlist-card'>
        <div className='playlist'>
            <Playlists videoPlayingNow={videoPlayingNow}/>
            <label style={{display:createNewPlaylist ?"none":"block"}}onClick={()=>setNewPlaylist(true)}>
                     <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path>
                    </svg>
                    Add New Playlist
            </label>
            {createNewPlaylist&&
            <div  className='playlist-creator'>
                 <label>Name:</label>  
                 <input type='text' value={newPlayListName} onChange={(e)=>setNewPlayListName(e.target.value)}/><br/>
                 <button type='submit' className='btn-create' onClick={()=>playlistCreator(dispatch,videoPlayingNow,newPlayListName,setNewPlayListName)}>Create</button>
            </div>
          }
           <button className='btn-close' onClick={()=>setPlaylistContainer(false)}>X</button>
           <span className='toast-close'>close</span>
        </div> 
    </div>)
}
