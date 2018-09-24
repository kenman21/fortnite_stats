export function setPlatform(id){
  return (dispatch) => {
    dispatch({type: 'SET_PLATFORM', payload: id})
  }
}

export function setPlayers(array){
  return (dispatch) => {
    dispatch({type: 'SET_PLAYERS', payload: array})
  }
}
