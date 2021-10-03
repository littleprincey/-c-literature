import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>let's discover some (c)literature</h1>
        <a href="/bookList"><img className= 'clitImg' src="https://img.buzzfeed.com/buzzfeed-static/static/2017-06/28/12/campaign_images/buzzfeed-prod-fastlane-02/19-books-that-everyone-with-a-vagina-should-read-2-23506-1498668422-1_dblbig.jpg?resize=1200:*" alt="a lady fingering a book in between her legs"></img></a>
        <div className="middle">
          <div className="text">
            <a href="/bookList">clit me</a>
          </div>
        </div>
      </div>

    )
      
  }
}

export default Home

    