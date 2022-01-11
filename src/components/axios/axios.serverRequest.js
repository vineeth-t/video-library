import axios from "axios"
export const API = 'https://video-library-server-mongoose.vineetht.repl.co'
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


