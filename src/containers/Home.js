import React from 'react'

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
