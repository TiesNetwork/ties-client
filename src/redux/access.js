export const SET_TOKEN = 'ACCESS/SET_TOKEN'
export const setToken = token => dispatch => {
  localStorage.setItem('token', token)
  dispatch({ type: SET_TOKEN, payload: token })
}

export default (state = {
  token: localStorage.getItem('token')
}, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token
      }
    default:
      return state
  }
}
