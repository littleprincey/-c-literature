import React from 'react'
import { connect } from 'react-redux'


const Books = (props) => {
  


    return (
      <>
        <h1>here is a list of incredible books!</h1>
        <div>
          {/* <h3>{props.books[0].title}</h3> */}
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
