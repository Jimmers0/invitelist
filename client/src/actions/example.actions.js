import store from '../store'
import axios from 'axios'


export function start() {
  axios.get('https://randomuser.me/api/').then(resp => {
    store.dispatch({
      
      type: 'START',
      payload: resp.data
    })
    
  })
}

export function addNotGoing(invitee){

  store.dispatch ({
    type: 'ADD_NOTGOING',
    payload: invitee
             
  })
  start()
  
}

export function addGoing(invitee){

  store.dispatch ({
    type: 'ADD_GOING',
    payload: invitee
             
  })
  start()
  
}
