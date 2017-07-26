import { normalize } from 'normalizr'
import { updateEntities } from '../../entities'

export const LOGIN_FAILURE = 'SCENES/LOGIN_FAILURE'
export const LOGIN_REQUEST = 'SCENES/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'SCENES/LOGIN_SUCCESS'

export const login = password => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
  promise: api.login(password)
    .then(response => {
      const data = normalize(response.wallets, [schema.wallet])

      dispatch(updateEntities(data))
    })
})
