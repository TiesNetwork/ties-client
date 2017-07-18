import { updateEntities } from '../../../../redux/entities'

export const WALLET_CREATE_FAILURE = 'WALLET/CREATE_FAILURE'
export const WALLET_CREATE_REQUEST = 'WALLET/CREATE_REQUEST'
export const WALLET_CREATE_SUCCESS = 'WALLET/CREATE_SUCCESS'

export const createWallet = () => async (dispatch, getState, { push }) => {
  dispatch({ type: WALLET_CREATE_REQUEST })

  try {
    const response = await Client.createUserNew()
    console.log(response)
    dispatch(push('/wallet/security'))
    dispatch(updateEntities(response))
    dispatch({ type: WALLET_CREATE_SUCCESS })
  } catch (e) {
    console.error(e)
    dispatch({ type: WALLET_CREATE_FAILURE })
  }
}
