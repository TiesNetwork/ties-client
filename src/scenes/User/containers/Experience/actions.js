import { normalize } from 'normalizr';

/** Actions **/
import { updateEntities } from '../../../../entities';
import { updateProjects } from '../../../../entities/users';

export const FETCH_PROJECTS_FAILURE = 'SCENES/USER/FETCH_PROJECTS_FAILURE';
export const FETCH_PROJECTS_REQUEST = 'SCENES/USER/FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCESS = 'SCENES/USER/FETCH_PROJECTS_SUCCESS';

export const fetchProjects = address => (dispatch, getState, { api, schema }) => dispatch({
  types: [FETCH_PROJECTS_REQUEST, FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE],
  promise: api.projects.getByAddress(address)
    .then(response => {
      const data = normalize(response, [schema.project]);

      dispatch(updateEntities(data));
      dispatch(updateProjects(address, data.result));
    })
});
