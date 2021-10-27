import { createContext, useContext, useReducer } from "react";
import { stateReducer } from "../Reducer/stateReducer";
export const StateContext=createContext()
export function StateContextProvider({children}){
const[state,dispatch]=useReducer(stateReducer, {
                                              videoPlayingNow:{},
                                              likedVideo:[],
                                              hambug:'leftNav',
                                              toast:'',
                                              history:[],
                                              checkBox:false,
                                              playlists:[{
                                                playListName:'WatchLater',
                                                playListId:1,
                                                listOfVideos:[]
                                                
                                                }]
                                          }
                                       )
                                 
   return( 
   <StateContext.Provider value={{state,dispatch}}>
        {children}
    </StateContext.Provider>
   )
}
export function useStateContext(){
   return useContext(StateContext)
}
