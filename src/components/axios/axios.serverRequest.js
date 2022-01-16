import axios from "axios"
export const API = 'https://fintube.herokuapp.com'
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


export async function likeUnlikeVideo(videoId,dispatch){
  try{
    const {data:{response,liked,message}}=await axios.post(`${API}/likedVideos/`,{videoId})
    if(response){
      dispatch({type:'SET_LIKED_VIDEOS',payload:{liked,message}})
    }else{
      dispatch({type:'TOAST',payload:message})
    }
  }catch(error){
     console.log(error)
  }
}

export async function getLikedVideosFromDB(dispatch){

  try{
    const {data:{response,liked,message}}=await axios.get(`${API}/likedVideos/`)
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
export function setAuthorizationHeaderForServieCalls(token){
  if(token){
    return axios.defaults.headers.common['Authorization']=token
  }return delete axios.defaults.headers.common['Authorization']
}
export function expectionHandlerForServiceCalls(logoutHandler,navigate,authDispatch){
  const UNAUTHORIZED=401
  axios.interceptors.response.use(response=>response
  ,(error)=>{
      if(error?.response?.status===UNAUTHORIZED){
        logoutHandler(authDispatch)
        navigate('/login')
      }return Promise.reject(error)
  })
}