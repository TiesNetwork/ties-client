import {
  WALLET_SET_PASSWORD_FAILURE,
  WALLET_SET_PASSWORD_REQUEST,
  WALLET_SET_PASSWORD_SUCCESS
} from './actions'

export default (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case WALLET_SET_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case WALLET_SET_PASSWORD_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case WALLET_SET_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
