export const SEARCH_FAILURE = 'SCENES/SEARCH_FAILURE'
export const SEARCH_REQUEST = 'SCENES/SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SCENES/SEARCH_SUCCESS'

export const search = text => (dispatch, getState, { api }) => ({
  types: [SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE],
  promise: api.search(text)
    .then(response => {
      console.log(response)
    })
})
