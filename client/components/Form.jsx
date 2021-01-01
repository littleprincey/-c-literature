import React from 'react'
import { render } from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Form extends React.Component {
  state = {
    name: ''
  }
  handleSubmit = e => {
    e.preventDefault

    this.setState({
      name: evt.target.value
    })
  }

  handleChange = e => {

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>your name:<input type="text" name="name" onChange={this.handleChange}/></label>
          <input type="Submit" name="let's go!" onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
}

export default Form