export const PROFILE_EDIT_FAILURE = 'SCENES/PROFILE/EDIT_FAILURE'
export const PROFILE_EDIT_REQUEST = 'SCENES/PROFILE/EDIT_REQUEST'
export const PROFILE_EDIT_SUCCESS = 'SCENES/PROFILE/EDIT_SUCCESS'

export const editProfile = values => (dispatch, getState, { api, schema }) => dispatch({
  types: [ PROFILE_EDIT_REQUEST, PROFILE_EDIT_SUCCESS, PROFILE_EDIT_FAILURE ],
  promise: api.account.setInfo(values)
    .then(response => {
      console.log(response)
    })
})
