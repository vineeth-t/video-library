
import { useState } from "react";
import { useStateContext } from "../../contexts";
import './playlist.css'
export function playlistCreator(dispatch,videoId,newPlayListName,setNewPlayListName){
    console.log(newPlayListName)
    if(newPlayListName===''||newPlayListName===undefined ){
        alert('Enter a name')
    }else{
        dispatch({type:'createNewPlaylist',payload:{name:newPlayListName,playlistId:newPlayListName,listOfVideos:videoId}})
        setNewPlayListName('')
    }
   
}
export function CreatePlaylist({videoId,setPlaylistContainer}){
    const {state:{playlist},dispatch}=useStateContext();
    console.log({playlist})
    const[createNewPlaylist,setNewPlaylist]=useState(false);
    const[newPlayListName,setNewPlayListName]=useState()
    
return(
    <div className='playlist-card'>
        <div className='playlist'>
            <label>
                <input type='checkbox' onChange={()=>dispatch({type:'watchLater',videoId:videoId})}/>
                watch Later
            </label>

            {playlist.map(({name,playlistId,listOfVideos})=>{
            return  <label onClick={()=>dispatch({type:'addToPlayList',videoId:videoId,playlistId:playlistId})} style={{color:'black'}}>
                    {listOfVideos.find((video)=>video.videoId===videoId)&&console.log('true')}
                            <svg aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42z" fill="currentColor">
                            </path></svg>
                  
                <span>{name}</span>
            </label>
            })}
            <label style={{display:createNewPlaylist ?"none":"block"}}onClick={()=>setNewPlaylist(true)}>
                     <svg width="1em" height="1em" viewBox="0 0 24 24"><path d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7v-1zm4.5-9a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19zm0 1a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17z" fill="currentColor"></path>
                    </svg>
                    Add New Playlist
            </label>
            {createNewPlaylist&&
            <div  className='playlist-creator'>
                 <label>Name:</label>  
                 <input type='text' value={newPlayListName} onChange={(e)=>setNewPlayListName(e.target.value)}/><br/>
                 <button type='submit' className='btn-create' onClick={()=>playlistCreator(dispatch,videoId,newPlayListName,setNewPlayListName)}>Create</button>
            </div>
          }
           <button onClick={()=>setPlaylistContainer(false)}>X</button>
        </div> 
       
    </div>)
}