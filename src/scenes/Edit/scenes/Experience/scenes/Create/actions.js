/** Actions **/
import { updateProject } from '../../../../../../entities/projects';
import { updateProjects } from '../../../../../../entities/users';

export const CREATE_PROJECT_FAILURE = 'SCENES/EDIT/CREATE_PROJECT_FAILURE';
export const CREATE_PROJECT_REQUEST = 'SCENES/EDIT/CREATE_PROJECT_REQUEST';
export const CREATE_PROJECT_SUCCESS = 'SCENES/EDIT/CREATE_PROJECT_SUCCESS';

export const createProject = values => (dispatch, getState, { api, push, schema }) => dispatch({
  types: [CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE],
  promise: api.projects.create(values)
    .then(response => {
      dispatch(updateProject(response.id, response));
      dispatch(updateProjects(response.__address, response.id));

      dispatch(push('/edit/experience'));
    })
});
