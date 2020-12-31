import React from 'react'
import { connect } from 'react-redux'



export class App extends React.Component {
  state = {
    
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
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
