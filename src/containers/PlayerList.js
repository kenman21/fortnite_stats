import React from 'react'
import Player from '../components/Player.js'
import { CSSTransitionGroup } from 'react-transition-group'
import {connect} from 'react-redux'

class PlayerList extends React.Component {
  render() {
    let players = this.props.players.map((player,index) => <Player key={index} index={index} goToHistory={this.props.goToHistory} stats={player}/>);
    return (
        <CSSTransitionGroup
          transitionName="Player"
          component="div"
          className="player-list"
          transitionAppear={false}
          transitionEnter={true}
          transitionEnterTimeout={200}
          transitionLeave={true}
          transitionLeaveTimeout={200}>
          {players}
        </CSSTransitionGroup>
    )
  }
}

function mapStatetoProps(state){
  return {
    players: state.players
  }
}


export default connect(mapStatetoProps)(PlayerList)
