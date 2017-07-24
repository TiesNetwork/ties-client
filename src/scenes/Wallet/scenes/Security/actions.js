export const WALLET_SET_PASSWORD_FAILURE = 'WALLET/SET_PASSWORD_FAILURE'
export const WALLET_SET_PASSWORD_REQUEST = 'WALLET/SET_PASSWORD_REQUEST'
export const WALLET_SET_PASSWORD_SUCCESS = 'WALLET/SET_PASSWORD_SUCCESS'

export const walletSetPassword = (newPassword, oldPassword) => async dispatch => {
  dispatch({ type: WALLET_SET_PASSWORD_REQUEST })

  try {
    await Client.wallet.setPassword(newPassword, oldPassword)
    const response = await Client.wallet.encrypt()

    dispatch({ type: WALLET_SET_PASSWORD_SUCCESS })
  } catch (e) {
    console.error(e)
    dispatch({ type: WALLET_SET_PASSWORD_FAILURE })
  }
}

// {"ct":"jF2p/pscD/omWIwxgzsup1gUwJu/JwM7CjUUeBaT3cLhMId25xA3GW+604j1qmEv","iv":"bb25ede69704056b1c4c266f53959b7b","s":"102660cda498c078"}
