import axios from "axios";
import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { VerticalVideoCard } from "..";
import { useStateContext,useThemeContext } from "../../contexts";
export function ShowIndividualPlayList(){
    const{theme}=useThemeContext();
    const{state:{playlists},dispatch}=useStateContext();
    const {libraryId}=useParams();
    const playList=playlists.find((playlist)=>playlist.playListId===libraryId)
    async function deletePlaylist(libraryId){
        const {data:{response},status}=await axios.delete(`https://video-library-server.vineetht.repl.co/playlists/${libraryId}`)
        if(status===201){
            dispatch({type:'SET_PLAYLISTS',payload:response})
        }
    }
    return (  
        <div> 
            {playList?.listOfVideos.length===0&&<h2>Add Videos to appear here</h2>}
            <button onClick={()=>deletePlaylist(libraryId)}>
                <Link to='/'>
                Delete PlayList
                </Link>
                </button>
        {playList?.listOfVideos.map((video)=>{
            const{id}=video                       
         return(<div className='playlist-videos'>
             <Link to={`/videoPlayer/${id}`}>
                 <VerticalVideoCard video={video}/>
            </Link>
            <button className='btn-primary'>
                <svg className={theme==='light'?'svg-img-black':'svg-img'} aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"></path></svg>
            </button>
            <span className='toast-card'>Delete</span>
        </div>)
            })}
</div>
)
}