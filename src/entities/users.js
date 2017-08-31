export const DELETE_PROJECT = 'ENTITIES/USERS/DELETE_PROJECT';
export const deleteProject = (address, payload) => ({ type: DELETE_PROJECT, address, payload });

export const UPDATE_CONTACTS = 'ENTITIES/USERS/UPDATE_CONTACTS';
export const updateContacts = (address, payload) => ({ type: UPDATE_CONTACTS, address, payload });

export const UPDATE_PROJECTS = 'ENTITIES/USERS/UPDATE_PROJECTS';
export const updateProjects = (address, payload) => ({ type: UPDATE_PROJECTS, address, payload });

export const UPDATE_USER = 'ENTITIES/USERS/UPDATE_USER';
export const updateUser = (address, payload) => ({ type: UPDATE_USER, address, payload });

export default (state = {}, action) => {
  const user = state[action.address];

  switch (action.type) {
    case DELETE_PROJECT:
      return {
        ...state,
        [action.address]: {
          ...user,
          projects: user.projects.filter(project => project !== action.payload)
        }
      };
    case UPDATE_CONTACTS:
      return {
        ...state,
        [action.address]: {
          ...user,
          contacts: _.uniq(_.concat(user.contacts || [], action.payload))
        }
      };
    case UPDATE_PROJECTS:
      return {
        ...state,
        [action.address]: {
          ...user,
          projects: _.uniq(_.concat(user.projects || [], action.payload))
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
