import { useEffect } from "react"
import { useStateContext } from "../../contexts/index";
import './toast.css'
export function Toast({msg}){
    const{dispatch}=useStateContext();
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
         dispatch({type:'removeToast'})
        },2000)
        return()=>{
            clearTimeout(timeOut)
        } 
    })
    return (
        <div className='toast'>
            <h5>{msg}</h5>
        </div>
    )
}