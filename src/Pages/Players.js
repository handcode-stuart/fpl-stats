import React, { Component } from 'react'
import Axios from 'axios'

import './Players.css'

import PlayerCard from '../Components/Players/PlayerCard'

class Players extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allPlayers: null,
            sortedPlayers: null
        }
    }

    getAllPlayers() {
        Axios.get('https://fantasy.premierleague.com/drf/bootstrap-static')
        .then((response) => {
            this.setState({
                allPlayers: response.data.elements,
                sortedPlayers: response.data.elements
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    sortPlayers(filter, reverse = false) {

        let sortedPlayers = [];
        sortedPlayers = sortedPlayers.concat(this.state.allPlayers);

        if (filter === 'all') {

            this.setState({
                sortedPlayers: this.state.allPlayers
            })

        } else {

            this.setState({
                sortedPlayers: sortedPlayers.sort((a, b) => {
                    if (a[filter] < b[filter]) {
                        if (reverse) {
                            return -1;
                        }
                        return 1;
                    }

                    if (a[filter] > b[filter]) {
                        if (reverse) {
                            return 1;
                        }
                        return -1;
                    }

                    return 0;
                })
            })

        }
    }

    componentDidMount() {
        this.getAllPlayers();
    }

    render() {
        return (
            <div>
                <h1>Players</h1>
                <p>Sort by:</p>
                <button onClick={() => {this.sortPlayers('all')}}>Players</button>
                <button onClick={() => {this.sortPlayers('total_points')}}>Points</button>
                <button onClick={() => {this.sortPlayers('goals_scored')}}>Goals</button>
                <div className="players-grid container">
                    {
                        !this.state.sortedPlayers ?
                            'Loading...'
                        :
                        this.state.sortedPlayers.map(function(player) {
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
                        })
                    }
                </div>

            </div>
        )
    }
}

export default Players
