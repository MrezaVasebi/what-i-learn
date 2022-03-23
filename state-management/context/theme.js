const SET_THEME = 'SET_THEME'

export const setTheme = (value) => ({
    type: SET_THEME,
    payload: value
})

export const themeInitialState = {
    isLight: true
}

export default themeReducer = (state = themeInitialState, action) => {
    switch (action.type) {
        case SET_THEME:
            return { ...state, isLight: action.payload }
        default:
            return state
    }
}