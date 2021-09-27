import { createContext, useContext, useReducer, useState } from "react";
import { reducer } from "../Reducer/reducer";
export const LibraryContext=createContext()

export function LibraryContextProvider({children}){
const[state,dispatch]=useReducer(reducer, {
                                              videoPlayingNow,
                                              likedVideo,
                                              watchLater,
                                              hambug,toast,history,
                                              playlist
                                          }
                                       )
                                 
   return( 
   <LibraryContext.Provider value={{state,dispatch}}>
        {children}
    </LibraryContext.Provider>
   )
}
export function useLibraryContext(){
   return useContext(LibraryContext)
}
export const videoPlayingNow={};
export const likedVideo=[];
export const watchLater=[];
export const hambug='leftNav';
export const toast='';
export const history=[];
export const playlist=[]