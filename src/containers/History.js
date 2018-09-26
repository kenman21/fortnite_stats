import React from 'react'
import {connect} from 'react-redux'

class History extends React.Component{

  // {this.props.player_history[0].dateCollected}

  render() {
  console.log(this.props.player_history);
  return (
    <div class="history-container">
      {this.props.player_history ? this.props.player_history[0].dateCollected:null}
    </div>
    )
  }
}

function mapStatetoProps(state){
  return {
    player_history: state.player_history
  }
}

export default connect(mapStatetoProps)(History)
