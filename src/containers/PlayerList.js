import React from 'react'
import Player from '../components/Player.js'

class PlayerList extends React.Component {
  render() {
    console.log(this.props.players)
    let players = this.props.players.map((player,index) => <Player key={index} index={index} removePlayer={this.props.removePlayer} stats={player} />);
    return (
      <div className="player-list">
        {players}
      </div>
    )
  }
}

export default PlayerList
