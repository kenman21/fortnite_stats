let defaultState = {
    players: [],
    average: [],
    name: "",
    platform: "",
    history: null
  }

export default function manageHistory(state = defaultState, action) {
  switch (action.type){
    case 'SET_PLATFORM':
      return {...state, platform: action.payload}
    case 'SET_PLAYERS':
      return {...state, players: [...state.players, action.payload]}
    case 'SET_NAME':
      return {...state, name: action.payload}
    case 'SET_AVERAGE':
      return {...state, average: action.payload}
    case 'SET_HISTORY':
      return {...state, history: action.payload}
    case 'REMOVE_PLAYER':
      return {...state, players: [...state.players.slice(0,action.payload), ...state.players.slice(action.payload+1)]}
    default:
      return state
    }
  }
