import { SET_BOOKS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return action.books
    default:
      return state
  }
}

export default reducer