import axios from "axios"
import { checkBoxChanger } from "../playlist/playlistModal"

export async function AddOrRemoveFromPlaylist(playlists,playListId,dispatch,videoPlayingNow){
    const{id}=videoPlayingNow
    if(checkBoxChanger(playlists,playListId,id)){
      try{
          const {data:{response},status}=await axios.post(`https://video-library-server.vineetht.repl.co/playlists/${playListId}/videos`,{
            listOfVideos:id
          })
          if(status===201){
            dispatch({type:'SET_PLAYLISTS',payload:response})
            dispatch({type:'TOAST',payload:'Video Removed'})
            checkBoxChanger(playlists,playListId,id)
          }
    }catch(error){
      console.log(error);
      alert(error)
    }
      
  }else{
    try{
      const {data:{response},status}=await axios.post(`https://video-library-server.vineetht.repl.co/playlists/${playListId}/videos`,{
        listOfVideos:videoPlayingNow})

    if(status===201){
      dispatch({type:'SET_PLAYLISTS',payload:response})
      dispatch({type:'TOAST',payload:'Video Added'})
    }
    }catch(error){
      alert(error)
    }
    
  }
  }

  export async function deletePlaylist(libraryId,dispatch){
    try{
      const {data:{response},status}=await axios.delete(`https://video-library-server.vineetht.repl.co/playlists/${libraryId}`)
      if(status===201){
          dispatch({type:'SET_PLAYLISTS',payload:response,msg:'Playlist Deleted'})
      }
    }catch(error){
      console.log(error)
    }

}
export async function likeUnlikeVideo(videoId,dispatch){
  try{
    const {data:{response}}=await axios.post(`https://video-library-server.vineetht.repl.co/likedVideos/${videoId}`)
   dispatch({type:'SET_LIKED_VIDEOS',payload:response})
  }catch(error){
     console.log(error)
  }
}

export async function getDataFromServer(dispatch){
//Add this method to app.js after adding dataBAse
   try{
      const {data:{response}}=await axios.get('https://video-library-server.vineetht.repl.co')
      dispatch({type:'SET_VIDEOS',payload:response.videoList});
      dispatch({type:'SET_PLAYLISTS',payload:response.playlists})
      dispatch({type:'SET_HISTORY',payload:response.history})
      dispatch({type:'SET_LIKED_VIDEOS',payload:response.likedVideos})
    }catch(error){
      console.log(error);
      dispatch({type:'TOAST',payload:'Refresh the Page'})
    }

}
export async function notesHandler(e,videoId,note,notesHolder,dispatch){
  e.preventDefault();
  // IF NOTES FOR A PARTICULAR VIDEO IS ALREADY PRESENT THEN WE WILL ADD TO IT DIRECTLY
  if(notesHolder.find((notes)=>notes.videoId===videoId)){
      const {data:{response}}=await axios.post(`https://video-library-server.vineetht.repl.co/notes/${videoId}`,{
          listOfNotes:{noteId:note,notesTaken:note}
      })
  
      dispatch({type:'SET_NOTES',payload:response})
}else{
  const {data:{response}}=await axios.post("https://video-library-server.vineetht.repl.co/notes",{
      videoId:videoId,
      listOfNotes:[{noteId:note,notesTaken:note}]
  })
  dispatch({type:'SET_NOTES',payload:response})
}   
}

export async function deleteNotesById(videoId,notesId,dispatch){
  const {data:{response}}=await axios.delete(`https://video-library-server.vineetht.repl.co/notes/${videoId}/${notesId}`)
  console.log("s",{response})
  dispatch({type:'SET_NOTES',payload:response})
}