import React from 'react'
import Player from '../components/Player.js'
import { CSSTransitionGroup } from 'react-transition-group'

class PlayerList extends React.Component {
  render() {
    // console.log(this.props.players)
    let players = this.props.players.map((player,index) => <Player key={index} index={index} removePlayer={this.props.removePlayer} stats={player} />);
    return (
        <CSSTransitionGroup
          transitionName="Player"
          component="div"
          className="player-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {players}
        </CSSTransitionGroup>
    )
  }
}

export default PlayerList
