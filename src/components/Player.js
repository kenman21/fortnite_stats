import React from 'react'

class Player extends React.Component {
  render() {
    return(
      <div className="player">
        <div className="player-header">
          <h1> {this.props.stats.epicUserHandle} </h1>
          <button onClick={this.props.removePlayer} className="remove-player">X</button>
        </div>
        <h5> K/d: {this.props.stats.lifeTimeStats[11].value} </h5>
        <h5> Win %: {this.props.stats.lifeTimeStats[9].value} </h5>
        <h5> Matches Played: {this.props.stats.lifeTimeStats[7].value} </h5>
        <h5> Platform: {this.props.stats.platformNameLong} </h5>
      </div>
    )
  }
}

export default Player
