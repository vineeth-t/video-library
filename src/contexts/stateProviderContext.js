import { createContext, useContext, useReducer } from "react";
import { stateReducer } from "../Reducer/stateReducer";
export const StateContext=createContext()
export function StateContextProvider({children}){
   console.log(2)
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
                                              notesFolder:[]
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
