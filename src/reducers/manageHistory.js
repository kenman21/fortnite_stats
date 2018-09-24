let defaultState = {
    players: [],
    average: {},
    name: "",
    platform: "",
    history: null
  }

export default function manageHistory(state = defaultState, action) {
  switch (action.type){
    case 'SET_PLATFORM':
      return {...state, platform: action.payload}
    default:
      return state
    }
  }
