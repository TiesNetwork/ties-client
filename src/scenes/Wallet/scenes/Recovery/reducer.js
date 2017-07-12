import {
  WALLET_RECOVERY_FAILURE,
  WALLET_RECOVERY_REQUEST,
  WALLET_RECOVERY_SUCCESS
} from './actions'

export default (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case WALLET_RECOVERY_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case WALLET_RECOVERY_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case WALLET_RECOVERY_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
