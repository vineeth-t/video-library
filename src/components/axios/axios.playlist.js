import axios from "axios";
import { checkBoxChanger } from "../playlist/playlistModal";
import { API } from "./axios.serverRequest";

export async function getPlaylistsFromDB(userId,dispatch){
    try{
      const {data:{response,playlists,message}}=await axios.get(`${API}/playlists/${userId}`)
      console.log({playlists,response})
      if(response){
        dispatch({type:'SET_PLAYLISTS',payload:playlists})
      }else{
        dispatch({type:'TOAST',payload:message})
      }
  
    }catch(error){
      console.log(error);
      dispatch({type:'TOAST',payload:'Refresh the Page'})
    }
  }
  
  
  export async function AddOrRemoveFromPlaylist(playlists,userId,playListId,playListName,videoId,dispatch){
    console.log(checkBoxChanger(playlists,playListId,videoId))
    try{
      if(checkBoxChanger(playlists,playListId,videoId)){
        const {data:{response,message,playlists}}=await axios.post(`${API}/playlists/${userId}/${playListId}`,{videoId,name:playListName,flag:'DELETE'})
        if(response){
          dispatch({type:'SET_PLAYLISTS',payload:playlists})
          dispatch({type:'TOAST',payload:message});
         }else{
             dispatch({type:'TOAST',payload:'playlist deleted'})
         }
      }else{
        const {data:{response,message,playlists}}=await axios.post(`${API}/playlists/${userId}/${playListId}`,{videoId,name:playListName,flag:'ADD'})
        if(response){
          dispatch({type:'SET_PLAYLISTS',payload:playlists})
          dispatch({type:'TOAST',payload:message})
         }else{
             dispatch({type:'TOAST',payload:'playlist deleted'})
         }
      }
     
      
    }catch(error){
      console.log(error);
      dispatch({type:'TOAST',PAYLOAD:'Refresh the Page'})
    }
   
  
    
    }
    export async function addNewPlaylist(playlists,userId,videoId,newPlayListName,dispatch,setNewPlayListName){
      if(newPlayListName===''||newPlayListName===undefined ){
          alert('Enter a name');
          dispatch({type:'TOAST',payload:'Name required'})
      }else if(playlists.some(({playListName})=>playListName===newPlayListName)){
        alert('Name already exists');
          dispatch({type:'TOAST',payload:'Name already exists'});
          setNewPlayListName('')
      }else{
          const {data:{response,playlists,message}}=await axios.post(`${API}/playlists/${userId}`,{videoId,name:newPlayListName  })
       if(response){
          dispatch({type:'SET_PLAYLISTS',payload:playlists})
          dispatch({type:'TOAST',payload:message})
          setNewPlayListName('')
         }else{
             dispatch({type:'TOAST',payload:'something went wrong'})
         }
      }
     
  }  
    export async function deletePlaylist(userId,playlistId,dispatch){
      try{
        const {data:{response,playlists}}=await axios.delete(`${API}/playlists/${userId}/${playlistId}`)
        if(response){
            dispatch({type:'SET_PLAYLISTS',payload:playlists,msg:'Playlist Deleted'})
        }else{
          dispatch({type:'TOAST',PAYLOAD:'Something went wrong'})
        }
      }catch(error){
        console.log(error)
      }
  
  }
  
  