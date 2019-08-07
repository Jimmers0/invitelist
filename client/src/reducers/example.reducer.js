const initialState = {
  user: '',
  going: [],
  notgoing: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'START':
      return {...state, user: action.payload}
    case 'GET_GOING':
        return {...state, going: action.payload} 
    case 'GET_NOT_GOING':
        return {...state, notgoing: action.payload}   
    case 'ADD_NOTGOING':
          return {...state, notgoing:[ ...state.notgoing, action.payload]} 
    case 'ADD_GOING':
        return {...state, going:[ ...state.going, action.payload]}

    default:
      return state
  }
}