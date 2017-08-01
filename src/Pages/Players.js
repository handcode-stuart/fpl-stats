import React, { Component } from 'react'
import Axios from 'axios'

import './Players.css'

import PlayerCard from '../Components/Players/PlayerCard'

class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allPlayers: []
        }
    }

    componentDidMount() {
        this.getAllPlayers();
    }

    getAllPlayers() {
        return Axios.get('https://fantasy.premierleague.com/drf/bootstrap-static')
            .then((response) => {
                this.setState({
                    allPlayers: response.data.elements
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h1>Players</h1>
                <div className="players-grid container">
                    {this.state.allPlayers.map(function(player) {
                        return (
                            <PlayerCard
                                key={player.id}
                                firstName={player.first_name}
                                lastName={player.second_name}
                                playerImg={player.code}
                                cost={player.now_cost}
                                selectedBy={player.selected_by_percent}
                                totalPoints={player.total_points}
                                gameweekPoints={player.event_points}
                                avgPoints={player.points_per_game}
                                goalsScored={player.goals_scored}
                                assists={player.assists}
                            />
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Players
