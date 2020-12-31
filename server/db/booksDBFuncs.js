const connection = require('./connection')


// READ - Get All Books
function getBooks(db = connection) {
  return db('books')
    .select()
}

// READ - Get Single Book
function getBook(id, db = connection){
  return db('books')
  .select()
  .where('id', id)
  .first()
}
// kind of like a find, run thru all of the books and find the plant whose id matches the id that has been passed in 

// READ - Get User Books
// function getUsersBook(id, db = connection) {
//   return db('users_plants').select().where('user_id', id)
// }


//CREATE (Single Resource)
function createBook(newPlant, db = connection){
  return db('books').insert(newBook)
  // here we're going into the books db, inserting & automatically returning an array of ids for whatever thing(s) has been inserted, but we just want the id of the task we've added, hence the .then
  .then(ids => ids[0])
}

//
// function addBookToProfileDbFunc(plant, db = connection) {
//   return db('users_plants').insert(plant, 'id')
// }

// function deleteBook(id, db = connection) {
//   return db('users_plants').delete().where('plant_id', id)
// }

module.exports = {
  getBooks,
  getBook,
  // getUsersBook,
  createBook,
  // addBookToProfileDbFunc,
  // deleteBook
}