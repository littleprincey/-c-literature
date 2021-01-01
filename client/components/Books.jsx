import React from 'react'
import { connect } from 'react-redux'


const Books = (props) => {
  const books = props.books


    return (
      <>
        <div>
          <h3>{books[0].title}</h3>
        </div>
      </>
    )
  }

function mapStateToProps (globalState) {
  return {
    books: globalState.books
  }
}

export default connect(mapStateToProps)(Books)
