import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../Pages/Home'
import Players from '../Pages/Players'
import Scores from '../Pages/Scores'
import POTW from '../Pages/POTW'

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/players" component={Players} />
                    <Route path="/scores" component={Scores} />
                    <Route path="/POTW" component={POTW} />
                </Switch>
            </div>
        )
    }
}

export default Main
