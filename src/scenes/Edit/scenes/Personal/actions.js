import { normalize } from 'normalizr'

/** Actions **/
import { updateEntities } from '../../../../entities'

export const EDIT_PERSONAL_FAILURE = 'SCENES/EDIT/PERSONAL_FAILURE'
export const EDIT_PERSONAL_REQUEST = 'SCENES/EDIT/PERSONAL_REQUEST'
export const EDIT_PERSONAL_SUCCESS = 'SCENES/EDIT/PERSONAL_SUCCESS'

export const editPersonal = values => (dispatch, getState, { api, schema }) => dispatch({
  types: [EDIT_PERSONAL_REQUEST, EDIT_PERSONAL_SUCCESS, EDIT_PERSONAL_FAILURE],
  promise: api.account.setInfo(values)
    .then(response => {
      const data = normalize(response.users, [schema.user])

      dispatch(updateEntities(data))
    })
})
