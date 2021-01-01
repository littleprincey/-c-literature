import React from 'react'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions/index'


export class App extends React.Component {
  state = {
    
  }

  componentDidMount () {
    this.props.dispatch(fetchBooks())
  }

  render () {
    return (
      <div className='app'>
        <h1></h1>
       
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    
  }
}

export default connect(mapStateToProps)(App)
