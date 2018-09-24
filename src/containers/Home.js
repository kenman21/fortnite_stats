import React from 'react'
import PlayerList from './PlayerList.js'
import TeamStats from './TeamStats.js'
import Search from './Search.js'
import History from './History.js'
import {connect} from 'react-redux'
import {setPlayers} from '../actions/actions'

const URL = 'http://localhost:3000/api/v1/'

class Home extends React.Component {

  state = {
    average: {},
    history: null
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL + `players/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player: this.props.name,
        platform: this.props.platform
      })
    }).then(resp => resp.json()).then(resp => {
        if (resp.error) {

        } else {
          this.props.setPlayers(resp)
        }
      }
    )
  }

  removePlayer = (index) => {
    this.setState({
      players: [...this.state.players.slice(0,index), ...this.state.players.slice(index+1)]
    })
  }

  setAverage = (obj) => {
    this.setState({
      average: obj
    })
  }

  getHistory = (accountId) => {
    fetch(URL + `players/history`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accountId: accountId
      })
    }).then(resp => resp.json()).then(resp => {
        if (resp.error) {

        } else {
          this.setState({
            history: resp
          })
        }
      }
    )
  }

  render() {
    return (
      <div>
        <div class="nav">
           <h1 class="title">FORTNITE TEAM</h1>
        </div>
        <h1 className="header"> Assemble Your Squad </h1>
        <Search handleSubmit={this.handleSubmit} platformChange={this.platformChange}/>
        <TeamStats players={this.props.players} setAverage={this.setAverage}/>
        {this.state.history ? <History history={this.state.history}/>:null}
        <PlayerList players={this.props.players} removePlayer={this.removePlayer} getHistory={this.getHistory}/>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    players: state.players,
    name: state.name,
    platform: state.platform
  }
}

export default connect(mapStatetoProps, {setPlayers})(Home)
