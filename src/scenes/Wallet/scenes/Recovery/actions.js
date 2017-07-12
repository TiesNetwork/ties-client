export const WALLET_RECOVERY_FAILURE = 'WALLET/RECOVERY_FAILURE'
export const WALLET_RECOVERY_REQUEST = 'WALLET/RECOVERY_REQUEST'
export const WALLET_RECOVERY_SUCCESS = 'WALLET/RECOVERY_SUCCESS'

export const walletRecovery = phrase => async dispatch => {
  dispatch({ type: WALLET_RECOVERY_REQUEST })

  try {
    const response = await Client.User.createFromPrivateKey(phrase)
console.log(response)
    dispatch({ type: WALLET_RECOVERY_SUCCESS })
  } catch (e) {
    console.error(e)
    dispatch({ type: WALLET_RECOVERY_FAILURE })
  }
}
