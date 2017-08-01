import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <h1>FPL</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li className="not-available">POTW</li>
                    <li className="not-available">Scores</li>
                </ul>
            </div>
        )
    }
}

export default Nav
