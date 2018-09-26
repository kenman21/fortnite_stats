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

export function setName(string){
  return (dispatch) => {
    dispatch({type: 'SET_NAME', payload: string})
  }
}

export function setAverage(object){
  return (dispatch) => {
    dispatch({type: 'SET_AVERAGE', payload: object})
  }
}
