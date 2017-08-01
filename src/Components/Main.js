import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Pages/Home'
import Players from '../Pages/Players'

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/players" component={Players} />
                </Switch>
            </div>
        )
    }
}

export default Main
