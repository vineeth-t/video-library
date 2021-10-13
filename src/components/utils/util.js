function Playlists({videoPlayingNow}) {
    const {state:{playlists},dispatch}=useStateContext();
  return  playlists.map(({playListName,playlistId})=>(
       <label style={{color:'black'}} >    
            <input type='checkbox' onChange={()=>dispatch({type:'addToPlaylist',playlistId:playlistId,videoPlayingNow:videoPlayingNow})}/>
            <span>{playListName}</span>
        </label>
  ))}

 function playlistCreator(dispatch,videoPlayingNow,newPlayListName,setNewPlayListName){
    if(newPlayListName===''||newPlayListName===undefined ){
        alert('Enter a name')
    }else{
        dispatch({type:'createNewPlaylist',payload:{playListName:newPlayListName,playlistId:newPlayListName,listOfVideos:[videoPlayingNow]}})
        setNewPlayListName('')
    }
   
}