import React from 'react'

const URL = 'http://localhost:3000/api/v1/'

class Home extends React.Component {

  state = {
    name: "",
    platform: ""
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.name)
    fetch(URL + `players/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player: this.state.name,
        platform: this.state.platform
      })
    })
  }

  platformChange = (e) => {
    this.setState({
      platform: e.target.value
    })
  }

  render() {
    console.log(this.state.platform)
    return (
      <div>
        <h1> Enter a player name </h1>
        <form onSubmit={this.handleSubmit}>
          <input className='player-name' type='text' value={this.state.name} onChange={this.onChange}/>
          <select onChange={this.platformChange} name="platform">
            <option disabled selected value> - select a platform - </option>
            <option value="pc">PC</option>
            <option value="xbl">XBOX</option>
            <option value="psn">PS4</option>
          </select>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Home
