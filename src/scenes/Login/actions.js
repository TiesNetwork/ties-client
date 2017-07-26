import { normalize } from 'normalizr'

/** Actions **/
import { setCurrentUserId } from '../../services/session'
import { updateEntities } from '../../entities'

export const LOGIN_FAILURE = 'SCENES/LOGIN_FAILURE'
export const LOGIN_REQUEST = 'SCENES/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'SCENES/LOGIN_SUCCESS'

export const login = password => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  promise: api.login(password)
    .then(response => {
      const data = normalize(response, {
        users: [schema.user],
        wallets: [schema.wallet]
      })

      dispatch(setCurrentUserId(data.result.users[0]))
      dispatch(updateEntities(data))
    })
})
