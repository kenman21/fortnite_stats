import React from 'react'
import PlayerList from './PlayerList.js'
import TeamStats from './TeamStats.js'
import Search from './Search.js'
import History from './History.js'
import {connect} from 'react-redux'
import {setPlayers} from '../actions/actions'
import {fetchHistory} from '../actions/fetch_actions'

class Home extends React.Component {

  goToHistory = (accountId) => {
    this.props.history.push('/history');
    this.props.fetchHistory(accountId)
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="nav">
           <h1 className="title">FORTNITE TEAM</h1>
        </div>
        <h1 className="header"> Assemble Your Squad </h1>
        <Search/>
        <TeamStats/>
        <PlayerList goToHistory={this.goToHistory}/>    
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

export default connect(mapStatetoProps, {setPlayers, fetchHistory})(Home)
