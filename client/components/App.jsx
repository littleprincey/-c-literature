import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Form from './Form'

import { fetchBooks } from '../actions/index'

export class App extends React.Component {
  state = {
    
  }

  componentDidMount () {
    this.props.dispatch(fetchBooks())
  }

  render () {

    return (
      <div className='container'>
        <Router>
          <div className='nav'>
            <Route path='/' component={Nav}/>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/form' component={Form}/>
        </Router>
        <footer>this is a footer. fuck patriarchy</footer>
      </div>
      
    )
  }
}

function mapStateToProps (globalState) {
  return {
    
  }
}

export default connect(mapStateToProps)(App)

