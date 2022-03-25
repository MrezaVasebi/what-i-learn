import React, { useReducer } from 'react'

import { languageInitialState } from './language'
import languageReducer from './language'
import { themeInitialState } from './theme'
import themeReducer from './theme'
import { userInitialState } from './user'
import userReducer from './user'

export const UserContext = React.createContext(userInitialState)
export const ThemeContext = React.createContext(themeInitialState)
export const LanguageContext = React.createContext(languageInitialState)

export const GlobalProvider = ({ children }) => {
    const [stateUser, dispatchUser] = useReducer(userReducer, userInitialState)
    const [stateTheme, dispatchTheme] = useReducer(themeReducer, themeInitialState)
    const [stateLanguage, dispatchLanguage] = useReducer(languageReducer, languageInitialState)

    return (

        <UserContext.Provider value={{ stateUser, dispatchUser }}>
            <ThemeContext.Provider value={{ stateTheme, dispatchTheme }}>
                <LanguageContext.Provider value={{ stateLanguage, dispatchLanguage }}>
                    {children}
                </LanguageContext.Provider>
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}