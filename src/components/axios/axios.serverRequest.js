import axios from "axios"
import { checkBoxChanger } from "../playlist/playlistModal"

export const API = 'https://video-library-server-mongoose.vineetht.repl.co'

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
      const {data:{response}}=await axios.post(`${API}/notes/${videoId}`,{
          listOfNotes:{noteId:note,notesTaken:note}
      })
  
      dispatch({type:'SET_NOTES',payload:response})
}else{
  const {data:{response}}=await axios.post(`${API}`,{
      videoId:videoId,
      listOfNotes:[{noteId:note,notesTaken:note}]
  })
  dispatch({type:'SET_NOTES',payload:response})
}   
}

export async function deleteNotesById(videoId,notesId,dispatch){
  const {data:{response}}=await axios.delete(`${API}/notes/${videoId}/${notesId}`)
  console.log("s",{response})
  dispatch({type:'SET_NOTES',payload:response})
}

export async function signUpHandler(e,errorDispatch,formState,authDispatch,formChecker,navigate,dispatch){
  console.log(formState)
  e.preventDefault();
    if(formChecker(formState,errorDispatch)) {
        const {data:{response,userId,message}}=await axios.post(`${API}/signUp`,{firstname:formState.fname,lastname:formState.lname,username:formState.emailId,
        password:formState.password}) 
        console.log(formState.fname,userId)
        if(response){
            localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:formState.fname,userId:userId}))
            authDispatch({type:'LOGIN',payload:{userName:formState.fname,userId:userId}})
            navigate('/profile')
        }else{
          console.log(response)
            dispatch({type:'TOAST',payload:message})
        }
            
    }   
  
}
export async function loginHandler(event,loginDetails){
  event.preventDefault ();
  const{state,userName,password,authDispatch,navigate,dispatch}=loginDetails
  try{
    const {data:{response,fname,userId,message}}=await axios.post(`${API}/logIn`,{username:userName,password:password})
    if(response){
        localStorage?.setItem('login',JSON.stringify({isUserLoggedIn:true,userName:fname,userId:userId}))
        authDispatch({type:'LOGIN',payload:{userName:fname,userId}})
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

export async function historyHandler(userId,dispatch,videoId,flag){
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
  export async function createNewPlalist(playlists,userId,videoId,newPlayListName,dispatch,setNewPlayListName){
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
export async function getNotesFromDB(dispatch){
  try{
    const {data:{response}}=await axios.get(`${API}/notes`)
    dispatch({type:'SET_NOTES',payload:response})
  }catch(error){
    console.log(error);
    dispatch({type:'TOAST',payload:'Refresh the Page'})
  }
}
