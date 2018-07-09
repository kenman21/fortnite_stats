import React from 'react'
import Player from '../components/Player.js'

class PlayerList extends React.Component {
  render() {
    let players = this.props.players.map(player => <Player key={player.accountId} stats={player} />);
    console.log(this.props.players)
    return (
      <div className="player-list">
        {players}
      </div>
    )
  }
}

export default PlayerList
