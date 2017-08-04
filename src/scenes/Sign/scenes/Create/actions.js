import { normalize } from 'normalizr'

/** Actions **/
import { updateEntities } from '../../../../entities'
import { setCurrentUserId } from '../../../../services/session'

export const SIGN_CREATE_FAILURE = 'SCENES/SIGN/CREATE_REQUEST'
export const SIGN_CREATE_REQUEST = 'SCENES/SIGN/CREATE_REQUEST'
export const SIGN_CREATE_SUCCESS = 'SCENES/SIGN/CREATE_REQUEST'

export const create = password => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [SIGN_CREATE_REQUEST, SIGN_CREATE_SUCCESS, SIGN_CREATE_FAILURE],
  promise: api.account.create(password)
    .then(response => {
      const data = normalize(response, {
        users: [schema.user],
        wallets: [schema.wallet]
      })

      dispatch(push(ROUTES.SIGN.RECOVERY.path))
      dispatch(setCurrentUserId(data.result.wallets[0]))
      dispatch(updateEntities(data))
    })
})
