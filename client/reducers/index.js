import { combineReducers } from 'redux'

import books from './booksReducer'
import setLoaded from './loadContent'


export default combineReducers({
  books,
  setLoaded
})
