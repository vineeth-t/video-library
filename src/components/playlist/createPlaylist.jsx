import { useState } from "react";
import { useAuthContext, useStateContext } from "../../contexts";
import {  createNewPlalist } from "../axios/axios.serverRequest";
import './playlist.css'
import { PlaylistModal } from "./playlistModal";
export function CreateNewPlaylist({videoPlayingNow,setPlaylistContainer}){
    const{_id}=videoPlayingNow
    const {state:{playlists},dispatch}=useStateContext();
    const {authState:{userId}}=useAuthContext();
    const[createNewPlaylist,setNewPlaylist]=useState(false);
    const[newPlayListName,setNewPlayListName]=useState()
  
return(
    <div className='playlist-card'>
        <div className='playlist'>
            <PlaylistModal videoId={_id}/>
            <label style={{display:createNewPlaylist ?"none":"block"}}onClick={()=>setNewPlaylist(true)}>
                     <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path>
                    </svg>
                    Add New Playlist
            </label>
            {createNewPlaylist&&
            <div  className='playlist-creator'>
                 <label>Name:</label>  
                 <input type='text' value={newPlayListName} onChange={(e)=>setNewPlayListName(e.target.value)}/><br/>
                 <button type='submit' className='btn-create'
                  onClick={()=>createNewPlalist(playlists,userId,_id,newPlayListName,dispatch,setNewPlayListName)}>
                      Create</button>
            </div>
          }
           <button className='btn-close' onClick={()=>setPlaylistContainer(false)}>X</button>
           <span className='toast-close'>close</span>
        </div> 
    </div>)
}



