import { VerticalVideoCard } from "../../components";
import { useStateContext } from "../../contexts";
import './watchLater.css'

export function WatchLater(){
        const {state:{watchLater}}=useStateContext();
        return(
            <div className='watch-later'>
                  {watchLater.length===0&&<div style={{color:"white"}}>Add here to watch later </div>}
               {watchLater.map((video)=>{<VerticalVideoCard video={video}/>})}
            </div>
        )

}