export const DELETE_PROJECT = 'ENTITIES/USERS/DELETE_PROJECT';
export const deleteProject = (id, payload) => ({ type: DELETE_PROJECT, id, payload });

export const UPDATE_PROJECTS = 'ENTITIES/USERS/UPDATE_PROJECTS'
export const updateProjects = (id, payload) => ({ type: UPDATE_PROJECTS, id, payload });

export const UPDATE_USER = 'ENTITIES/USERS/UPDATE_USER'
export const updateUser = (id, payload) => ({ type: UPDATE_USER, id, payload });

export default (state = {}, action) => {
  const user = state[action.id];

  switch (action.type) {
    case DELETE_PROJECT:
      return {
        ...state,
        [action.id]: {
          ...user,
          projects: user.projects.filter(project => project !== action.payload)
        }
      };
    case UPDATE_PROJECTS:
      return {
        ...state,
        [action.id]: {
          ...user,
          projects: _.uniq(_.concat(state[action.id].projects || [], action.payload))
        }
      };
    case UPDATE_USER:
      return {
        ...state,
        [action.id]: {
          ...user,
          ...action.payload
        }
      };
    default:
      return state;
  }
};
