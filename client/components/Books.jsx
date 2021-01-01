import React from 'react'
import { connect } from 'react-redux'


const Books = (props) => {
  
  

console.log(props.books)
    return (
      <>
        <div>
          <h1>here is a list of incredible books!</h1>
          <div>
            <ul className='book-list'>
              <li>{props.books[0] && <p>{props.books[0].title} by {props.books[0].author}</p>}</li>
              <li>{props.books[1] && <p>{props.books[1].title} by {props.books[1].author}</p>}</li>
              <li>{props.books[2] && <p>{props.books[2].title} by {props.books[2].author}</p>}</li>
              <li>{props.books[3] && <p>{props.books[3].title} by {props.books[3].author}</p>}</li>
              <li>{props.books[4] && <p>{props.books[4].title} by {props.books[4].author}</p>}</li>
              <li>{props.books[5] && <p>{props.books[5].title} by {props.books[5].author}</p>}</li>
              <li>{props.books[6] && <p>{props.books[6].title} by {props.books[6].author}</p>}</li>
              <li>{props.books[7] && <p>{props.books[7].title} by {props.books[7].author}</p>}</li>
              <li>{props.books[8] && <p>{props.books[8].title} by {props.books[8].author}</p>}</li>
              <li>{props.books[9] && <p>{props.books[9].title} by {props.books[9].author}</p>}</li>
              <li>{props.books[10] && <p>{props.books[10].title} by {props.books[10].author}</p>}</li>
              <li>{props.books[11] && <p>{props.books[11].title} by {props.books[11].author}</p>}</li>
              <li>{props.books[12] && <p>{props.books[12].title} by {props.books[12].author}</p>}</li>
              <li>{props.books[13] && <p>{props.books[13].title} by {props.books[13].author}</p>}</li>
              <li>{props.books[14] && <p>{props.books[14].title} by {props.books[14].author}</p>}</li>
              <li>{props.books[15] && <p>{props.books[15].title} by {props.books[15].author}</p>}</li>
              <li>{props.books[16] && <p>{props.books[16].title} by {props.books[16].author}</p>}</li>
              <li>{props.books[17] && <p>{props.books[17].title} by {props.books[17].author}</p>}</li>
              <li>{props.books[18] && <p>{props.books[18].title} by {props.books[18].author}</p>}</li>
            </ul>
          </div>
        </div>  
      </>
    )
  }

function mapStateToProps (globalState) {
  return {
    books: globalState.books,
    setLoaded: globalState.setLoaded
  }
}

export default connect(mapStateToProps)(Books)
