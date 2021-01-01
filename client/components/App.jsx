import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Books from './Books'

import { fetchBooks } from '../actions/index'

export class App extends React.Component {
  state = {
    
  }

  componentDidMount () {
    this.props.dispatch(fetchBooks())
    console.log('component did in fact mount')
  }

  render () {

    return (
      <div className='container'>
        <Router>
          <div className='nav'>
            <Route path='/' component={Nav}/>
          </div>
          <Route exact path='/' component={Home}/>
          <Route path='/form' component={Books}/>
        </Router>
        <footer>this is a footer. fuck patriarchy</footer>
      </div>
      
    )
  }
}

function mapStateToProps (globalState) {
  return {
    books: globalState.books
  }
}

export default connect(mapStateToProps)(App)

