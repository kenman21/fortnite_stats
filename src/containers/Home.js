import React from 'react'
import PlayerList from './PlayerList.js'
import TeamStats from './TeamStats.js'
import Search from './Search.js'
import History from './History.js'
import {connect} from 'react-redux'
import {setPlayers} from '../actions/actions'
import {fetchHistory} from '../actions/fetch_actions'

class Home extends React.Component {

  state = {
    history: null
  }

  removePlayer = (index) => {
    this.setState({
      players: [...this.state.players.slice(0,index), ...this.state.players.slice(index+1)]
    })
  }

  render() {
    return (
      <div>
        <div class="nav">
           <h1 class="title">FORTNITE TEAM</h1>
        </div>
        {this.props.history ? <History/>:
        <div>
          <h1 className="header"> Assemble Your Squad </h1>
          <Search/>
          <TeamStats/>
          <PlayerList removePlayer={this.removePlayer}/>
        </div>
        }
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    players: state.players,
    name: state.name,
    platform: state.platform,
    history: state.history
  }
}

export default connect(mapStatetoProps, {setPlayers})(Home)
