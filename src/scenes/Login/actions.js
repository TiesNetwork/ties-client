import { updateEntities } from '../../redux/entities'

export const LOGIN_FAILURE = 'SCENES/LOGIN_FAILURE'
export const LOGIN_REQUEST = 'SCENES/LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'SCENES/LOGIN_SUCCESS'

export const login = password => async (dispatch, getState, { push }) => {
  dispatch({ type: LOGIN_REQUEST })

  try {
    const response = await Client.createUserDecrypt(localStorage.getItem('token'), password)

    dispatch(push('/profile/edit'))
    dispatch(updateEntities(response))
    dispatch({ type: LOGIN_SUCCESS })
  } catch (e) {
    console.error(e)
    dispatch({ type: LOGIN_FAILURE })
  }
}
