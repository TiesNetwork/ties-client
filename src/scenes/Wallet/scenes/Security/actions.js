import { normalize } from 'normalizr'
import { updateEntities } from '../../../../entities'

export const WALLET_SET_PASSWORD_FAILURE = 'WALLET/SET_PASSWORD_FAILURE'
export const WALLET_SET_PASSWORD_REQUEST = 'WALLET/SET_PASSWORD_REQUEST'
export const WALLET_SET_PASSWORD_SUCCESS = 'WALLET/SET_PASSWORD_SUCCESS'

export const walletSetPassword = (newPassword, oldPassword) => (dispatch, getState, { api, schema }) => dispatch({
  types: [WALLET_SET_PASSWORD_REQUEST, WALLET_SET_PASSWORD_SUCCESS, WALLET_SET_PASSWORD_FAILURE],
  promise: api.account.setPassword(newPassword, oldPassword)
    .then(response => {
      const data = normalize(response.wallets, [schema.wallet])

      dispatch(updateEntities(data))
    })
})
