import React from 'react'

class Search extends React.Component {

  render() {
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input className='player-name' type='text' value={this.props.name} onChange={this.props.onChange}/>
        <img className="icon" onClick={this.props.platformChange} id="psn" src="ps4.png"/>
        <img className="icon" onClick={this.props.platformChange} id="xbl" src="xbox.png"/>
        <img className="icon" onClick={this.props.platformChange} id="pc" src="pc.png"/>
        <input type='submit'/>
      </form>
    )
  }
}

export default Search

// <select onChange={this.props.platformChange} name="platform">
//   <option selected="selected"> - select a platform - </option>
//   <option value="pc">PC</option>
//   <option value="xbl">XBOX</option>
//   <option value="psn">PS4</option>
// </select>
