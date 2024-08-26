import { createContext, useState } from "react";

export const themeContext = createContext()


const ThemeProvider = ({children})=>{

    const [isDarkModeEnabled,setIsDarkMode] = useState(false);

    const toggleDarkMode = ()=>setIsDarkMode((prevState)=>!prevState)

    return(

        <themeContext.Provider value={{isDarkModeEnabled,toggleDarkMode}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider