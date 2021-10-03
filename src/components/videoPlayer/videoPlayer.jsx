import { videoList } from "../../dataBase";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { VideoCard,CreatePlaylist } from "../index";
import './videoPlayer.css'
import { useStateContext } from "../../contexts";
export function getVideoFromDataBase(videoList,videoId){
  return videoList.find((video)=>video.id===videoId)
}
export function VideoPlayer() {
  const{state:{likedVideo},dispatch}=useStateContext();
   let{videoId}=useParams();
   const videoPlayingNow=getVideoFromDataBase(videoList,videoId)
  const[playlistContainer,setPlaylistContainer]=useState(false)
  return(
  <div className='media-player-body'>
        {playlistContainer&&<CreatePlaylist setPlaylistContainer={setPlaylistContainer} videoId={videoId}/>}
       <div className="media-player">
              <iframe className='media-iframe'
                       src={`https://www.youtube.com/embed/${videoPlayingNow.id}`}
                       title="YouTube video player"
                       frameBorder="0"
                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
              </iframe> 
                <div className='profile-info'>
                      <div className='media-heading'>
                          <h5>{videoPlayingNow.name}</h5>
                       </div> 
                </div>
                <div className='media-details'>
                  <div className='media-views'>
                     <h5>{videoPlayingNow.views} views .</h5>
                    <h5>{videoPlayingNow.UploadedDate}</h5> 
                  </div>
                    <div className='media-like-unlike' >
                       {likedVideo.some((video)=>video.id===videoId)? <svg onClick={()=>dispatch({type:'likedVideo',videoId:videoId})} stroke="currentColor" fill='red' stroke-width="0" viewBox="0 0 1024 1024"height="1.5em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>:<svg onClick={()=>dispatch({type:'likedVideo',videoId:videoId})} stroke="currentColor" fill='currentcolor' stroke-width="0" viewBox="0 0 1024 1024"height="1.5em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>} 
                       <label>{videoPlayingNow.likes}</label>
                    </div>
                    <div className='media-watch-later' onClick={()=>setPlaylistContainer((flag)=>!flag)} >
                        <svg width="1.4em" height="1.5em" viewBox="0 0 24 24"><path d="M6 4h10.586L20 7.414V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm0 1a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7.914L16.086 5H15v5H6V5zm1 0v4h7V5H7zm5 7a3 3 0 1 1 0 6a3 3 0 0 1 0-6zm0 1a2 2 0 1 0 0 4a2 2 0 0 0 0-4z" fill="currentColor"></path></svg>
                        <label>Save</label>
                    </div>
               </div>
               <div className='profile-info'>
                <img className='profile-icon' src={`${videoPlayingNow.img}`}/>
                <div className='user-profile'>
                  <h5>{videoPlayingNow.channelName}</h5>
                  <p>11k subscribers</p>
                  </div>
               </div>

         </div>
          <div className='media-list'>
            {videoList.map((scrollVideoCard)=>
            scrollVideoCard.id!==videoPlayingNow.id&&<VideoCard video={scrollVideoCard} />
            )}
          </div>
    </div>)
  };
  