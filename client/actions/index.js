import { retrieveBooks } from "../apis/booksAPI"

export const SET_BOOKS = 'SET_BOOKS'
export const SET_LOADED = 'SET_LOADED'

export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    books
  }
}

export const setLoaded = () => {
  return {
    type: SET_LOADED,
  };
};

export const fetchBooks = () => {
  return dispatch => {
    return retrieveBooks()
      .then(books => {
        dispatch(setBooks(books))
        dispatch(setLoaded())
      })
  }
}
