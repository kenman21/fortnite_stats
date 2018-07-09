import React from 'react'

class TeamStats extends React.Component {
  render() {
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
