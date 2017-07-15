import {
  WALLET_CREATE_FAILURE,
  WALLET_CREATE_REQUEST,
  WALLET_CREATE_SUCCESS
} from './actions'

export default (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case WALLET_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case WALLET_CREATE_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case WALLET_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
