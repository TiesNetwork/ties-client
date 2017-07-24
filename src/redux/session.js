// export const SET_TOKEN = 'ACCESS/SET_TOKEN'
// export const setToken = token => dispatch => {
//   localStorage.setItem('token', token)
//   dispatch({ type: SET_TOKEN, payload: token })
// }

export const SET_USER_ID = 'SESSION/SET_USER_ID'
export const setUserId = userId => ({
  type: SET_USER_ID, userId: userId
})

export default (state = {
  token: localStorage.getItem('token'),
  userId: null
}, action) => {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        userId: action.userId
      }
    default:
      return state
  }
}
