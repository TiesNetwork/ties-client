export const CLOSE_MODAL = 'SERVICES/MODALS/CLOSE_MODAL'
export const closeModal = id => ({ type: CLOSE_MODAL, id })

export const CLOSE_MODALS = 'SERVICES/MODALS/CLOSE_MODALS'
export const closeModals = ({ type: CLOSE_MODALS })

export const OPEN_MODAL = 'SERVICES/MODALS/OPEN_MODAL'
export const openModal = (id, props) => ({ type: OPEN_MODAL, id, props })

export const prompt = props => ({ type: OPEN_MODAL, id: 'prompt', props })

export default (state = {}, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return _.omit(state, action.id)
    case CLOSE_MODALS:
      return {}
    case OPEN_MODAL:
      return {
        ...state,
        [action.id]: action.props || true
      }
    default:
      return state
  }
}
