import axios from "axios";
import { API } from "./axios.serverRequest";

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