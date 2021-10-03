import React from 'react'
import { connect } from 'react-redux'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Nav from './Nav'
import Books from './Books'
import About from './About'

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
          <Route exact path='/about' component={About}/>
          <Route path='/bookList' component={Books}/>
        </Router>
        <footer><a href='https://www.linkedin.com/in/orlando-bright-289724130/'>Orlando's LinkedIn</a></footer>
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

