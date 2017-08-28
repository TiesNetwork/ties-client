import { normalize } from 'normalizr';

/** Actions **/
import { updateProjects } from '../../../../../../entities/users';
import { updateEntities } from '../../../../../../entities';

export const GET_PROJECTS_FAILURE = 'SCENES/USER/GET_PROJECTS_FAILURE';
export const GET_PROJECTS_REQUEST = 'SCENES/USER/GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'SCENES/USER/GET_PROJECTS_SUCCESS';

export const getProjects = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [GET_PROJECTS_REQUEST, GET_PROJECTS_SUCCESS, GET_PROJECTS_FAILURE],
  promise: api.projects.getByAddress(address)
    .then(response => {
      const data = normalize(response, [schema.project])

      dispatch(updateEntities(data))
      dispatch(updateProjects(address, data.result))
    })
});
