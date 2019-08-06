const initialState = {
  start: '',
  going: [],
  notgoing: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'START':
      return {...state, start: action.payload}
    case 'ADD_NOTGOING':
          return {...state, notgoing:[ action.payload, ...state.notgoing]} 
    case 'ADD_GOING':
        return {...state, going:[ action.payload, ...state.going]}
    default:
      return state
  }
}