import React, { useReducer } from 'react'

import { themeInitialState } from './theme'
import themeReducer from './theme'
import { userInitialState } from './user'
import userReducer from './user'

export const UserContext = React.createContext(userInitialState)
export const ThemeContext = React.createContext(themeInitialState)

export const GlobalProvider = ({ children }) => {
    const [stateUser, dispatchUser] = useReducer(userReducer, userInitialState)
    const [stateTheme, dispatchTheme] = useReducer(themeReducer, themeInitialState)

    return (

        <UserContext.Provider value={{ stateUser, dispatchUser }}>
            <ThemeContext.Provider value={{ stateTheme, dispatchTheme }}>
                {children}
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}