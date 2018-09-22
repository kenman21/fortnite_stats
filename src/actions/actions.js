export function setPlatform(id){
  return (dispatch) => {
    dispatch({type: 'SET_PLATFORM', payload: id})
  }
}
