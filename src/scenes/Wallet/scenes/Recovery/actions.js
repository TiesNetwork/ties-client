import { normalize } from 'normalizr'

/** Actions **/
import { setCurrentUserId } from '../../../../services/session'
import { updateEntities } from '../../../../entities'

export const WALLET_RECOVERY_FAILURE = 'SCENES/WALLET/SCENES/RECOVERY_FAILURE'
export const WALLET_RECOVERY_REQUEST = 'SCENES/WALLET/SCENES/RECOVERY_REQUEST'
export const WALLET_RECOVERY_SUCCESS = 'SCENES/WALLET/SCENES/RECOVERY_SUCCESS'

export const walletRecovery = phrase => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [WALLET_RECOVERY_REQUEST, WALLET_RECOVERY_SUCCESS, WALLET_RECOVERY_FAILURE],
  promise: api.wallets.recovery(phrase)
    .then(response => {
      const data = normalize(response, {
        users: [schema.user],
        wallets: [schema.wallet]
      })

      dispatch(setCurrentUserId(data.result.users[0]))
      dispatch(updateEntities(data))
    })
})
