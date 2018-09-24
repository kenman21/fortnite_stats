import React from 'react'
import PlayerList from './PlayerList.js'
import TeamStats from './TeamStats.js'
import Search from './Search.js'
import History from './History.js'
import {connect} from 'react-redux'
import {setPlatform, setPlayers} from '../actions/actions'

const URL = 'http://localhost:3000/api/v1/'

class Home extends React.Component {

  state = {
    average: {},
    name: "",
    history: null
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL + `players/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player: this.state.name,
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

  platformChange = (e) => {
    e.preventDefault()
    this.props.setPlatform(e.target.id)
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
        <Search handleSubmit={this.handleSubmit} platformChange={this.platformChange} onChange={this.onChange} name={this.state.name}/>
        <TeamStats players={this.props.players} setAverage={this.setAverage}/>
        {this.state.history ? <History history={this.state.history}/>:null}
        <PlayerList players={this.props.players} removePlayer={this.removePlayer} getHistory={this.getHistory}/>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  return {
    platform: state.platform,
    players: state.players
  }
}

export default connect(mapStatetoProps, {setPlatform, setPlayers})(Home)
