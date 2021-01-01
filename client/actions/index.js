import { retrieveBooks } from "../apis/booksAPI"

export const SET_BOOKS = 'SET_BOOKS'

export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books
  }
}

export const fetchBooks = () => {
  return dispatch => {
    return retrieveBooks()
      .then(books => {
        dispatch(setBooks(books))
      })
  }
}
