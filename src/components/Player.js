import React from 'react'

class Player extends React.Component {
  render() {
    console.log(this.props.stats.accountId)
    return(
      <div className="player">
        <p onClick={() => this.props.removePlayer(this.props.index)} className="remove-player">X</p>
        <div className="player-header">
          <h1> {this.props.stats.epicUserHandle} </h1>
        </div>
        <div className="stats">
          <h1> K/d: {this.props.stats.lifeTimeStats[11].value} </h1>
          <h1> Win %: {this.props.stats.lifeTimeStats[9].value} </h1>
          <h1> Matches Played: {this.props.stats.lifeTimeStats[7].value} </h1>
          <h1> Platform: {this.props.stats.platformNameLong} </h1>
          <a href="#" onClick={() => {this.props.getHistory(this.props.stats.accountId)}}> Check Match History </a>
        </div>
      </div>
    )
  }
}

export default Player
