export const WALLET_CREATE_FAILURE = 'WALLET/CREATE_FAILURE'
export const WALLET_CREATE_REQUEST = 'WALLET/CREATE_REQUEST'
export const WALLET_CREATE_SUCCESS = 'WALLET/CREATE_SUCCESS'

export const createWallet = phrase => async dispatch => {
  dispatch({ type: WALLET_CREATE_REQUEST })

  try {
    const response = await Client.User.createNew()
console.log(response)
    dispatch({ type: WALLET_CREATE_SUCCESS })
  } catch (e) {
    console.error(e)
    dispatch({ type: WALLET_CREATE_FAILURE })
  }
}
