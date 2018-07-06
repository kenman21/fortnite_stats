import React from 'react'

const URL = 'http://localhost:3000/api/v1/'

class Home extends React.Component {

  state = {
    name: ""
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    fetch(URL + `players/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        words: e.target.value
      })
    })
  }

  render() {
    return (
      <div>
        <h1> Enter a player name </h1>
        <form onSubmit={this.onSubmit}>
          <input className='player-name' type='text' value={this.state.name} onChange={this.onChange}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Home
