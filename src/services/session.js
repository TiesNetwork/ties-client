export const SET_CURRENT_USER_ID = 'SERVICES/SESSION/SET_CURRENT_USER_ID'
export const setCurrentUserId = userId => ({ type: SET_CURRENT_USER_ID, userId })

export default (state = {
  userId: null
}, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_ID:
      return {
        ...state,
        userId: action.userId
      }
    default:
      return state
  }
}
