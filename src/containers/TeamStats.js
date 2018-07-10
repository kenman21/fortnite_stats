import React from 'react'

class TeamStats extends React.Component {
  render() {
    let avg_stats
    if (this.props.players.length !== 0) {
      avg_stats = Array(this.props.players[0].lifeTimeStats.length)
      for (let i = 0; i < avg_stats.length; i++){
        avg_stats[i] = Object.assign({}, {key: "", value: 0})
      }
      for (let i = 0; i < this.props.players.length; i++){
        for (let j = 0; j < avg_stats.length; j++){
          avg_stats[j].key = this.props.players[i].lifeTimeStats[j].key
          avg_stats[j].value += parseFloat(this.props.players[i].lifeTimeStats[j].value)
        }
      }
    }
    console.log(avg_stats)
    return(
      <div>
        {this.props.players.length !== 0 ?
        <h1> Squad Average Stats </h1>
        : null}
      </div>
    )
  }
}

export default TeamStats
