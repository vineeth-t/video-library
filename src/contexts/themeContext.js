import { createContext, useContext, useState } from "react";
export const ThemeProvider=createContext();
export const lightColor={
backgroundColor:'rgba(255, 255, 255, 0.575)',
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
            document.documentElement.setAttribute("data-theme", 'light')
        }else{
            setThemeColor(blackColor)
            setTheme('dark')
            document.documentElement.setAttribute("data-theme", 'dark')

        }
    }
    return <ThemeProvider.Provider value={{theme,themeColor,themeChanger}}>
        {children}
    </ThemeProvider.Provider>

}
export function useThemeContext(){
    return useContext(ThemeProvider);
}
