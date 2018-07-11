import React from 'react'

class TeamStats extends React.Component {
  render() {
    let avg_stats

    // If there are players in the 'squad' create an average of their stats
    if (this.props.players.length !== 0) {
      avg_stats = Array(this.props.players[0].lifeTimeStats.length)
      for (let i = 0; i < avg_stats.length; i++){
        avg_stats[i] = Object.assign({}, {key: "", value: 0})
      }
      // Add all the stats together
      for (let i = 0; i < this.props.players.length; i++){
        for (let j = 0; j < avg_stats.length; j++){
          avg_stats[j].key = this.props.players[i].lifeTimeStats[j].key
          avg_stats[j].value += parseFloat(this.props.players[i].lifeTimeStats[j].value)
        }
      }
      // Average them out
      for (let i = 0; i < avg_stats.length; i++) {
        avg_stats[i].value = avg_stats[i].value/this.props.players.length;
        avg_stats[i].value = Math.trunc(avg_stats[i].value * 100)/100
      }
    }
    return(
      <div className="player-list">
        {this.props.players.length !== 0 ?
        <div className="player">
          <div className="player-header">
            <h1> Squad Stats </h1>
          </div>
            <h5> K/d: {avg_stats[11].value} </h5>
            <h5> Win %: {avg_stats[9].value} </h5>
            <h5> Matches Played: {avg_stats[7].value} </h5>
        </div>
        : null}
      </div>
    )
  }
}

export default TeamStats
