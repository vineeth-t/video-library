import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom"
import { useEffect } from "react/cjs/react.development";
import { useAuthContext, useStateContext, useThemeContext } from "../../contexts";
import { API } from "../axios/axios.serverRequest";

export function ShowIndividualPlayList(){
    const{theme}=useThemeContext();
    const{state:{playlists},dispatch}=useStateContext();
    const {playlistId}=useParams();
    const[currentPlayList,setCurrentPlaylist]=useState(null)
    const{authState:{userId}}=useAuthContext();
    console.log(playlists,theme,currentPlayList)
    useEffect(()=>{
        (async function(){
         const {data:{response,playlist,message}}= await axios.get(`${API}/playlists/${userId}/${playlistId}`)
         console.log(playlist)
         if(response){
             setCurrentPlaylist(playlist)
         }else{
           dispatch({type:'TOAST',payload:message})
         }
         console.log('2')
        }())
     });
    return (  
        <div>This is playlists</div>
    )}