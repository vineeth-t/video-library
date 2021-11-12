import { createContext, useContext, useReducer } from "react";
import { stateReducer } from "../Reducer/stateReducer";
export const StateContext=createContext()
export function StateContextProvider({children}){
const[state,dispatch]=useReducer(stateReducer, {
                                              videoList:[],
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
                                                }],
                                             note:'',
                                             notesHolder:[]
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
