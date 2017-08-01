import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/players">Players</Link></li>
                    <li><Link to="/scores">Scores</Link></li>
                    <li><Link to="/potw">POTW</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav
