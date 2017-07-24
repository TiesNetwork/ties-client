import {
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS
} from './actions'

export default (state = {
  isFetching: false
}, action) => {
  switch (action.type) {
    case SEARCH_FAILURE:
      return {
        ...state,
        isFetching: false
      }
    case SEARCH_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case SEARCH_SUCCESS:
      return {
        ...state,
        isFetching: false
      }
    default:
      return state
  }
}
