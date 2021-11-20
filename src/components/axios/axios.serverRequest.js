import axios from "axios"
import { checkBoxChanger } from "../playlist/playlistModal"

export async function AddOrRemoveFromPlaylist(playlists,playListId,dispatch,videoPlayingNow){
    const{id}=videoPlayingNow
    if(checkBoxChanger(playlists,playListId,id)){
      const {data:{response},status}=await axios.post(`https://video-library-server.vineetht.repl.co/playlists/${playListId}/videos`,{
        listOfVideos:id
      })
      if(status===201){
        dispatch({type:'SET_PLAYLISTS',payload:response})
        dispatch({type:'TOAST',payload:'Video Removed'})
        checkBoxChanger(playlists,playListId,id)
      }
  }else{
    const {data:{response},status}=await axios.post(`https://video-library-server.vineetht.repl.co/playlists/${playListId}/videos`,{
        listOfVideos:videoPlayingNow
    })
    console.log({response,status})
    if(status===201){
      dispatch({type:'SET_PLAYLISTS',payload:response})
      dispatch({type:'TOAST',payload:'Video Added'})
    }
  }
  }

  export async function deletePlaylist(libraryId,dispatch){
    const {data:{response},status}=await axios.delete(`https://video-library-server.vineetht.repl.co/playlists/${libraryId}`)
    if(status===201){
        dispatch({type:'SET_PLAYLISTS',payload:response,msg:'Playlist Deleted'})
    }
}