import React from 'react'

import './PlayerCard.css'

function PlayerCard(props) {
    return (
        <div className="player-card">
            <h5>{props.firstName + ' ' + props.lastName} <span>{props.gameweekPoints}pts</span></h5>
            <img
                src={'https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p' + props.playerImg + '.png'}
                alt={props.firstName + ' ' + props.lastName + ' photo'}
            />
            <p>Price: £{(props.cost)/10}M</p>
            <p>Picked by: {props.selectedBy}%</p>
            <p>Total points: {props.totalPoints}</p>
            <p>Average gameweek points: {props.avgPoints}</p>
            <p>Goals scored: {props.goalsScored}</p>
            <p>Assists: {props.assists}</p>
        </div>
    )
}

export default PlayerCard
