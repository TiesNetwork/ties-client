import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS
} from './actions'

export default (state = {
  loading: false
}, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
