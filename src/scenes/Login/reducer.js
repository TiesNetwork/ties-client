import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS
} from './actions'

export default (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
