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

export function fetchHistory(accountId){
  return (dispatch) => {
    return fetch(URL + `players/history`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        accountId: accountId
      })
    }).then(resp => resp.json()).then(resp => {
        if (resp.error) {

        } else {
          dispatch({type: 'SET_HISTORY', payload: resp})
        }
      }
    )
  }
}
