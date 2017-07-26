import { normalize } from 'normalizr'

/** Actions **/
import { setCurrentUserId } from '../../../../services/session'
import { updateEntities } from '../../../../entities'

export const WALLET_CREATE_FAILURE = 'WALLET/CREATE_FAILURE'
export const WALLET_CREATE_REQUEST = 'WALLET/CREATE_REQUEST'
export const WALLET_CREATE_SUCCESS = 'WALLET/CREATE_SUCCESS'

export const createWallet = () => (dispatch, getState, { api }) => dispatch({
  types: [WALLET_CREATE_REQUEST, WALLET_CREATE_SUCCESS, WALLET_CREATE_FAILURE],
  promise: api.wallets.create()
    .then(response => {
      const data = normalize(response, {
        users: [schema.user],
        wallets: [schema.wallet]
      })

      dispatch(setCurrentUserId(data.result.users[0]))
      dispatch(updateEntities(data))
    })
})
