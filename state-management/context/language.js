const LANGUAGE = 'LANGUAGE'

export const setLanguage = (value) => ({
    type: LANGUAGE,
    payload: value
})

export const languageInitialState = {
    lan: 'en'
}

export default languageReducer = (state = languageInitialState, action) => {
    switch (action.type) {
        case LANGUAGE:
            return { ...state, lan: action.payload }
        default:
            return state
    }
}