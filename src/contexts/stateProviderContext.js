import { createContext, useContext, useReducer } from "react";
import { stateReducer } from "../Reducer/stateReducer";
export const StateContext=createContext()
export function StateContextProvider({children}){
const[state,dispatch]=useReducer(stateReducer, {
                                              videoPlayingNow,
                                              likedVideo,
                                              watchLater,
                                              hambug,toast,history,playlist
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
export const videoPlayingNow={};
export const likedVideo=[];
export const watchLater=[];
export const hambug='leftNav';
export const toast='';
export const history=[];
export const playlist=[]