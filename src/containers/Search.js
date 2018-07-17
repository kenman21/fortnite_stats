import React from 'react'

class Search extends React.Component {

  render() {
    console.log(this.props.name)
    return(
      <form onSubmit={this.props.handleSubmit}>
        <input className='player-name' type='text' value={this.props.name} onChange={this.props.onChange}/>
        <select onChange={this.props.platformChange} name="platform">
          <option selected="selected"> - select a platform - </option>
          <option value="pc">PC</option>
          <option value="xbl">XBOX</option>
          <option value="psn">PS4</option>
        </select>
        <input type='submit'/>
      </form>
    )
  }
}

export default Search
