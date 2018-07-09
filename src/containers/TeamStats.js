import React from 'react'

class TeamStats extends React.Component {
  render() {
    let avg_stats
    if (this.props.players.length !== 0) {
      avg_stats = this.props.players[0].lifeTimeStats.slice()
    
    }
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
