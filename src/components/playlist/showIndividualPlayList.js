import { useParams } from "react-router-dom"

export function ShowIndividualPlayList(){
    const {playlistId}=useParams();
    console.log(playlistId)
    return (  
        <div>This is playlists</div>
    )}