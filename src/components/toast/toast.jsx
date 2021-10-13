import { useEffect } from "react"
import { useStateContext } from "../../contexts/index";
import './toast.css'
export function Toast(){
    const{state:{toast},dispatch}=useStateContext();
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
         dispatch({type:'REMOVE_TOAST'})
        },2000)
        return()=>{
            clearTimeout(timeOut)
        } 
    },[dispatch])
    return (
        <div className='toast'>
            <h5>{toast}</h5>
        </div>
    )
}