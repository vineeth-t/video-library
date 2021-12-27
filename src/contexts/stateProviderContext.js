import { createContext, useContext, useReducer } from "react";
import { stateReducer } from "../Reducer/stateReducer";
export const StateContext=createContext()
export function StateContextProvider({children}){
const[state,dispatch]=useReducer(stateReducer, {
                                              videoList:[],
                                              videoPlayingNow:{},
                                              likedVideos:[],
                                              hambug:'notLeftNav',
                                              toast:'',
                                              history:[],
                                              checkBox:false,
                                              playlists:[],
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
