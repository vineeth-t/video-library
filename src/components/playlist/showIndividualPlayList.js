import { useParams } from "react-router"
import { Link } from "react-router-dom";
import { VerticalVideoCard } from "..";
import { useStateContext,useThemeContext } from "../../contexts";
import { AddOrRemoveFromPlaylist,deletePlaylist } from "../../components/axios";
export function ShowIndividualPlayList(){
    const{theme}=useThemeContext();
    const {playlistId}=useParams();
    const{state:{playlists},dispatch}=useStateContext();
    const currentPlayList=playlists.find((playlist)=>playlist._id===playlistId);
    return (  
        <div> 
            <div className='playlist-header'>
                {currentPlayList?.listOfVideos?.length===0&&<h2>Add Videos to appear here</h2>}
                <button className='playlist-delete-btn'onClick={()=>deletePlaylist(playlistId,dispatch)}>
                    
                    <Link to='/'>
                    <svg width="2em" height="2em" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12l1.41 1.41L13.41 14l2.12 2.12l-1.41 1.41L12 15.41l-2.12 2.12l-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"></path></svg>
                    </Link>
                    </button>
                    <span className='sub-text'>Delete</span>
            </div>
        {currentPlayList?.listOfVideos.map(({video})=>{                      
         return(<div className='playlist-videos'>
             <Link to={`/videoPlayer/${video.id}`}>
                 <VerticalVideoCard video={video}/>
            </Link>
            <button className='btn-primary' onClick={()=>AddOrRemoveFromPlaylist(playlists,currentPlayList?._id,currentPlayList?.playListName,video._id,dispatch)}>
                <svg className={theme==='light'?'svg-img-black':'svg-img'} aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"></path></svg>
            </button>
            <span className='toast-card'>Delete</span>
        </div>)
            })}
</div>
)}