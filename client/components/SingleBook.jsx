import React from 'react'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'



const SingleBook = (props) => {

  const book = props.book 
  const handleClick = () => {
    const bookObject = {
      book_id: book.id,
      name: ''
    }

  
 
} 

  
  return (
    <div>
      <div className='each-book'>
      <div className='smallBook'>
          {/* <img className='smallBook-picture' src= {book.img} alt={`image of a ${book.title}`}/> */}
        <div className=''>
          <p className='name'>{book.title}</p>
          <p className='author'>{book.author}</p>

        </div>
        <div className='button-plate'>
          {/* <Link to={`/books/${book.title}`} className="butties" id={`more-info-${book.title}`}>More info</Link> */}
        </div>
        </div>
      
        </div>
        </div>
  )
}

function mapStateToProps (globalState) {
    return {
      books: globalState.books,
      setLoaded: globalState.setLoaded
    }
  }
  
export default connect(mapStateToProps)(SingleBook)