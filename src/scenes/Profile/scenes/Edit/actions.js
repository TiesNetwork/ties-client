export const PROFILE_EDIT_FAILURE = 'SCENES/PROFILE/EDIT_FAILURE'
export const PROFILE_EDIT_REQUEST = 'SCENES/PROFILE/EDIT_REQUEST'
export const PROFILE_EDIT_SUCCESS = 'SCENES/PROFILE/EDIT_SUCCESS'

export const editProfile = () => (dispatch, getState, { api, push, schema }) => ({
  types: [ PROFILE_EDIT_REQUEST, PROFILE_EDIT_SUCCESS, PROFILE_EDIT_FAILURE ],
  promise: api.account.setInfo()
    .then(response => {
      console.log(response)
    })
})
