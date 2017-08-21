export const SET_PROJECTS = 'ENTITIES/USERS/SET_PROJECTS'
export const setProjects = (id, projects) => ({
  type: SET_PROJECTS,
  id: id, payload: projects
})

export const UPDATE_USER = 'ENTITIES/USERS/UPDATE_USER'
export const updateUser = (id, values) => ({
  type: UPDATE_USER,
  id: id, payload: values
})

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PROJECTS:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          projects: _.uniq(_.concat(state[action.id].projects || [], action.payload))
        }
      }

    case UPDATE_USER:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          ...action.payload
        }
      }
    default:
      return state
  }
}
