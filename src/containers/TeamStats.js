import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import {setAverage} from '../actions/actions'
import {connect} from 'react-redux'

class TeamStats extends React.Component {

  componentDidUpdate(prevProps) {
    // If there are players in the 'squad' create an average of their stats
    if (this.props.players !== prevProps.players && this.props.players.length !== 0){
      let avg_stats
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
      
      this.props.setAverage(avg_stats)
    }
    else if (this.props.players.length === 0 && prevProps.players.length !== 0){
      this.props.setAverage([])
    }
  }

  render() {
    return(
      <CSSTransitionGroup
        transitionName="Player"
        component="div"
        className="player-list"
        transitionAppear={false}
        transitionEnter={true}
        transitionEnterTimeout={200}
        transitionLeave={true}
        transitionLeaveTimeout={200}>
        {this.props.average.length !== 0 ?
        <div className="player">
          <div className="player-header">
            <h1> Squad Stats </h1>
          </div>
          <div className="stats">
            <h5> K/d: {this.props.average[11].value} </h5>
            <h5> Win %: {this.props.average[9].value} </h5>
            <h5> Matches Played: {this.props.average[7].value} </h5>
          </div>
        </div>
        : null}
      </CSSTransitionGroup>
    )
  }
}

function mapStatetoProps(state){
  return {
    players: state.players,
    average: state.average
  }
}

export default connect(mapStatetoProps, {setAverage})(TeamStats)
