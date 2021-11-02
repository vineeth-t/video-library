import { useParams } from 'react-router';
import { useStateContext } from '../../contexts/index';
import './note.css'
export function notesHandler(e,videoId,note,notesHolder,dispatch){
    e.preventDefault();
    // IF NOTES FOR A PARTICULAR VIDEO IS ALREADY PRESENT THEN WE WILL ADD TO IT DIRECTLY
    if(notesHolder.find((notes)=>notes.videoId===videoId)){
        dispatch({type:'ADD_TO_NOTES', 
            videoId:videoId,
            InputNote:{noteId:note,notesTaken:note}          
    })
}else{
    dispatch({type:'SET_NEW_NOTES',
    videoId:videoId,
    listOfNotes:{noteId:note,notesTaken:note}
    })
}   
}
export function Notes(){
    const{state:{note,notesHolder},dispatch}=useStateContext();
    const{videoId}=useParams();
    const notes=notesHolder?.find((notes)=>notes.videoId===videoId)
    return(
        <div className='notes-container'>
            <div style={{borderBottom:'2px solid red'}}>
                <h3>Take Notes here</h3>
            </div>
           
            {notes?.length!==0&&notes?.listOfNotes.map(({noteId,notesTaken})=>{
                return <div className='notes-child'>{notesTaken}
                        <button className='btn-remove' onClick={()=>
                         dispatch({type:'DELETE_NOTE',noteId:noteId})}
                    >
                             x
                        </button>
                </div>
            })}
            <div className='form-container'>
            <form onSubmit={(event)=>notesHandler(event,videoId,note,notesHolder,dispatch)}>
                 <input value={note} onChange={(event)=>dispatch({type:'SET_NOTE_CONTENT',payload:event.target.value})} className='notes-input' type='text' placeholder='Key points to be noted'/> 
            </form>
            </div>
           
        </div>
    )
}