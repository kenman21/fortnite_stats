import React from 'react'

class History extends React.Component{

  render() {
    console.log(this.props.history)
  return (
    <div class="history-container">
      {this.props.history[0].dateCollected}
    </div>
    )
  }
}

export default History
