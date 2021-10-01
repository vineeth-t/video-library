import { useEffect } from "react"
import { useStateContext } from "../../contexts/index";
import './toast.css'
export function Toast(){
    const{state:{toast},dispatch}=useStateContext();
    useEffect(()=>{
        let timeOut=setTimeout(()=>{
         dispatch({type:'removeToast'})
        },2000)
        return()=>{
            clearTimeout(timeOut)
        } 
    },[toast])
    return (
        <div className='toast'>
            <h5>{toast}</h5>
        </div>
    )
}