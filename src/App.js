import React, { Component } from 'react'
import Nav from './Components/Nav'
import { BrowserRouter as Router } from 'react-router-dom'

import Main from './Components/Main'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Main />
                </div>
            </Router>
        )
    }
}

export default App
