import React from 'react'

class Player extends React.Component {
  render() {
    return(
      <div>
        <h1> {this.props.stats.epicUserHandle} </h1>
      </div>
    )
  }
}

export default Player
