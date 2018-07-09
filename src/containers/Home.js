import React from 'react'
import PlayerList from './PlayerList.js'
import Player from '../components/Player.js'
import TeamStats from './TeamStats.js'

const URL = 'http://localhost:3000/api/v1/'

class Home extends React.Component {

  state = {
    name: "",
    platform: "",
    players: []
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

  render() {
    return (
      <div>
        <h1> Assemble Your Squad </h1>
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
        <TeamStats/>
        <PlayerList players={this.state.players}/>
      </div>
    )
  }
}

export default Home
