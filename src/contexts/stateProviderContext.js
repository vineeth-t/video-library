import { createContext, useContext, useReducer, useState } from "react";
import { stateReducer } from "../Reducer/stateReducer";
export const LibraryContext=createContext()

export function StateContextProvider({children}){
const[state,dispatch]=useReducer(stateReducer, {
                                              videoPlayingNow,
                                              likedVideo,
                                              watchLater,
                                              hambug,toast,history,
                                              playlist
                                          }
                                       )
                                 
   return( 
   <StateContextProvider.Provider value={{state,dispatch}}>
        {children}
    </StateContextProvider.Provider>
   )
}
export function useStateContext(){
   return useContext(LibraryContext)
}
export const videoPlayingNow={};
export const likedVideo=[];
export const watchLater=[];
export const hambug='leftNav';
export const toast='';
export const history=[];
export const playlist=[]