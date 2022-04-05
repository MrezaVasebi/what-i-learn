const ADD_USER = 'ADD_USER'
const DELETE_USER = 'DELETE_USER'

export const addUser = (info) => ({
    type: ADD_USER,
    payload: info
})

export const deleteUser = (userId) => ({
    type: DELETE_USER,
    payload: userId
})

export const userInitialState = {
    users: []
}

export default userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return { ...state, users: state.users.concat(action.payload) }
        case DELETE_USER:
            const filtered = state.users.filter(el => el.userId !== action.payload)
            return { ...state, users: filtered }
        default:
            return state
    }
}