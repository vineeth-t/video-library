import axios from "axios"
import { checkBoxChanger } from "../playlist/playlistModal"

export const API = 'https://video-library-server-mongoose.vineetht.repl.co'
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
export async function likeUnlikeVideo(videoId,dispatch,userId){
  try{
    const {data:{response,liked,message}}=await axios.post(`${API}/likedVideos/${userId}`,{videoId})
    if(response){
      dispatch({type:'SET_LIKED_VIDEOS',payload:{liked,message}})
    }else{
      dispatch({type:'TOAST',payload:message})
    }
  }catch(error){
     console.log(error)
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

export async function signUpHandler(e,errorDispatch,formState,authDispatch,formChecker,navigate,dispatch){
  console.log(formState)
  e.preventDefault();
    if(formChecker(formState,errorDispatch)) {
        const {data:{response,userId,message}}=await axios.post(`https://video-library-server-mongoose.vineetht.repl.co/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
        password:formState.password}) 
        if(response){
            localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:formState.fname,userId:userId}))
            authDispatch({type:'LOGIN',payload:{fname:formState.fname,userId:userId}})
            navigate('/profile')
        }else{
          console.log(response)
            dispatch({type:'TOAST',payload:message})
            // navigate('/signUp');
         
        }
            
    }   
  
}
export async function loginHandler(event,loginDetails){
  event.preventDefault ();
  const{state,userName,password,authDispatch,navigate,dispatch}=loginDetails
  try{
    const {data:{response,fname,userId,message}}=await axios.post(`https://video-library-server-mongoose.vineetht.repl.co/logIn`,{username:userName,password:password})
    if(response){
        localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:fname,userId:userId}))
        authDispatch({type:'LOGIN',payload:{fname,userId}})
        navigate(state?.from?state.from:'/profile')
    }else{
      dispatch({type:'TOAST',payload:message})
    }
  }catch(error){
      console.log(error)
      dispatch({type:'TOAST',payload:error})
  }

}

export async function getVideosFromDB(dispatch){

    try{
      const {data:{response,videos,message}}=await axios.get(`${API}/videos`)
      if(response){
        dispatch({type:'SET_VIDEOS',payload:videos})
      }else{
        dispatch({type:'TOAST',payload:message})
      }
      
    }catch(error){
      console.log(error);
      dispatch({type:'TOAST',payload:'Refresh the Page'})
    }
}

export async function findCurrentVideo(setVideoPlayingNow,videoId,dispatch,navigate){
 
    const {data:{response,message,videoPlaying}}= await axios.get(`${API}/videos/${videoId}`)
    if(response){
      setVideoPlayingNow(videoPlaying)
    }else{
      navigate('/')
      dispatch({type:'TOAST',payload:message})
    }
}

export async function getLikedVideosFromDB(userId,dispatch){

  try{
    const {data:{response,liked,message}}=await axios.get(`${API}/likedVideos/${userId}`)
    if(response){
      dispatch({type:'SET_LIKED_VIDEOS',payload:{liked}})
    }else{
      dispatch({type:'TOAST',payload:message})
    }
  }catch(error){
    console.log(error);
    dispatch({type:'TOAST',payload:'Refresh the Page'})
  }
}
export async function getHistoryFromDB(userId,dispatch){
  try{
    const {data:{response,historyVideos,message}}=await axios.get(`${API}/history/${userId}`)
    if(response){
      dispatch({type:'SET_HISTORY',payload:historyVideos})
    }else{
      dispatch({type:'TOAST',payload:message})
    }

  }catch(error){
    console.log(error);
    dispatch({type:'TOAST',payload:'Refresh the Page'})
  }
}

export const historyHandler=async(userId,dispatch,videoId,flag)=>{
  try{
    const {data:{response,historyVideos,message}}=await axios.post(`${API}/history/${userId}`,{videoId,flag})
    if(response){
      dispatch({type:'SET_HISTORY',payload:historyVideos});
    }else{
      dispatch({type:'TOAST',payload:message})
    }
  }catch(error){
      console.log(error)
  }

} 
