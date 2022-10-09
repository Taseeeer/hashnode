import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(false);

    const handleThemeState = () => setTheme(theme => setTheme(!theme));

    return <ThemeContext.Provider value={{ theme, handleThemeState }}>{ children }</ThemeContext.Provider>
}