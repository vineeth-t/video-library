import { createContext, useContext, useState } from "react";
export const ThemeProvider=createContext();
export const lightColor={
backgroundColor:'white',
color:'black'
}
export const blackColor={
    backgroundColor:'black',
    color:'rgba(255, 255, 255, 0.575)'
    }
export function ThemeContextProvider({children}){
    const[themeColor,setThemeColor]=useState(lightColor);
    const[theme,setTheme]=useState('light')
    function themeChanger(color){
        if(color==='light'){
            setThemeColor(lightColor)
            setTheme('light')
        }else{
            setThemeColor(blackColor)
            setTheme('dark')

        }
    }
    return <ThemeProvider.Provider value={{theme,themeColor,themeChanger}}>
        {children}
    </ThemeProvider.Provider>

}
export function useThemeContext(){
    return useContext(ThemeProvider);
}
