import React from 'react'
import {connect} from 'react-redux'
import {setName, setPlatform} from '../actions/actions'
import {fetchPlayer} from '../actions/fetch_actions'

class Search extends React.Component {

  platformChange = (e) => {
    e.preventDefault()
    this.props.setPlatform(e.target.id)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.fetchPlayer(this.props.name, this.props.platform)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="search">
          <div className="input">
            <input className='player-name' type='text' value={this.props.name} onChange={(e) => this.props.setName(e.target.value)}/>
          </div>
          <div className="icons">
            <a className="imageAnchor" href="#">
              <img className="icon" onClick={this.platformChange} id="psn" src="ps4.png"/>
            </a>
            <a className="imageAnchor" href="#">
              <img className="icon" onClick={this.platformChange} id="xbl" src="xbox.png"/>
            </a>
            <a className="imageAnchor" href="#">
              <img className="icon" onClick={this.platformChange} id="pc" src="pc.png"/>
            </a>
          </div>
        <input type='submit'/>
        </div>
      </form>
    )
  }
}

function mapStatetoProps(state){
  return {
    name: state.name,
    platform: state.platform
  }
}

export default connect(mapStatetoProps, {setName, setPlatform, fetchPlayer})(Search)


// <select onChange={this.props.platformChange} name="platform">
//   <option selected="selected"> - select a platform - </option>
//   <option value="pc">PC</option>
//   <option value="xbl">XBOX</option>
//   <option value="psn">PS4</option>
// </select>
