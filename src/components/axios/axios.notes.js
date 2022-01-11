import axios from "axios";
import { API } from "./axios.serverRequest";

export async function getNotesFromDB(dispatch){
    try{
      const {data:{response}}=await axios.get(`${API}/notes`)
      dispatch({type:'SET_NOTES',payload:response})
    }catch(error){
      console.log(error);
      dispatch({type:'TOAST',payload:'Refresh the Page'})
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
  