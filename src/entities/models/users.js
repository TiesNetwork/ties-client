export const UPDATE_USER = 'ENTITIES/USERS/UPDATE_USER'
export const updateUser = (id, values) => ({
  type: UPDATE_USER,
  id: id, payload: values
})

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.payload
        }
      }
    default:
      return state
  }
}
