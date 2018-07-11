import React from 'react'
import PlayerList from './PlayerList.js'
import TeamStats from './TeamStats.js'

const URL = 'http://localhost:3000/api/v1/'

class Home extends React.Component {

  state = {
    name: "",
    platform: "",
    players: [],
    average: {}
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
        platform: this.state.platform
      })
    }).then(resp => resp.json()).then(resp => {
        if (resp.error) {

        } else {
          this.setState({
            players: [...this.state.players, resp]
          })
        }
      }
    )
  }

  platformChange = (e) => {
    this.setState({
      platform: e.target.value
    })
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

  render() {
    return (
      <div>
        <h1 className="header"> Assemble Your Squad </h1>
        <form onSubmit={this.handleSubmit}>
          <input className='player-name' type='text' value={this.state.name} onChange={this.onChange}/>
          <select onChange={this.platformChange} name="platform">
            <option selected="selected"> - select a platform - </option>
            <option value="pc">PC</option>
            <option value="xbl">XBOX</option>
            <option value="psn">PS4</option>
          </select>
          <input type='submit'/>
        </form>
        <TeamStats players={this.state.players} setAverage={this.setAverage}/>
        <PlayerList players={this.state.players} removePlayer={this.removePlayer}/>
      </div>
    )
  }
}

export default Home
