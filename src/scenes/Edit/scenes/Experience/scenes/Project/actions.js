/** Actions **/
import { updateProject as updateProjectEntities } from '../../../../../../entities/projects'

export const UPDATE_PROJECT_FAILURE = 'SCENES/EDIT/UPDATE_PROJECT_FAILURE'
export const UPDATE_PROJECT_REQUEST = 'SCENES/EDIT/UPDATE_PROJECT_REQUEST'
export const UPDATE_PROJECT_SUCCESS = 'SCENES/EDIT/UPDATE_PROJECT_SUCCESS'

export const updateProject = (address, id, values) => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [UPDATE_PROJECT_REQUEST, UPDATE_PROJECT_SUCCESS, UPDATE_PROJECT_FAILURE],
  promise: api.projects.update(address, id, values)
    .then(response => dispatch(updateProjectEntities(id, response)))
})
