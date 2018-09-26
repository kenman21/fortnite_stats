import React from 'react'
import {connect} from 'react-redux'

class History extends React.Component{

  render() {
  return (
    <div class="history-container">
      {this.props.history[0].dateCollected}
    </div>
    )
  }
}

function mapStatetoProps(state){
  return {
    history: state.history
  }
}

export default connect(mapStatetoProps)(History)
