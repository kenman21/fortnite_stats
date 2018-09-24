const URL = 'http://localhost:3000/api/v1/'

export function fetchPlayer(name, platform){
  return (dispatch) => {
    fetch(URL + `players/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        player: name,
        platform: platform
      })
    }).then(resp => resp.json()).then(resp => {
        if (resp.error) {

        } else {
          dispatch({type: 'SET_PLAYERS', payload: resp})
        }
      }
    )
  }
}
