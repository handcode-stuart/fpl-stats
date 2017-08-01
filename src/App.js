import React, { Component } from 'react'
import Nav from './Components/Nav'
import ReactRouter, { BrowserRouter as Router } from 'react-router-dom'

import Main from './Components/Main'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Fantasy Premier League</h1>
                    <Nav />
                    <Main />
                </div>
            </Router>
        )
    }
}

export default App
