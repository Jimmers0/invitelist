import store from '../store'
import axios from 'axios'
import shortid from 'shortid'

init()

function init() {
  axios.get('/api/going').then(resp => {
    getGoing(resp.data)
    console.log(resp.data)
  })

  axios.get('/api/notgoing').then(resp => {
    getNotGoing(resp.data)
  })

}




export function start() {
  axios.get('https://randomuser.me/api/').then(resp => {

    const data = resp.data.results[0]
    const id = shortid.generate()

   const user = {
     id: id,
     image: data.picture.large,
     fname: data.name.first,
     lname: data.name.last,
     phone: data.phone,
     email: data.email
   }
    

    store.dispatch({
      
      type: 'START',
      payload: user
    })
    console.log(user)
  })
}

function getGoing(users){
  store.dispatch({
    type: 'GET_GOING',
    payload: users

  })
}

function getNotGoing(users){
  store.dispatch({
    type: 'GET_NOT_GOING',
    payload: users

  })
}

export function addNotGoing(id){

  
  axios.post('/api/notgoing', store.getState().user).then (resp => {
    console.log(resp.data)
  

  store.dispatch ({
    type: 'ADD_NOTGOING',
    payload: resp.data.user
             
  })

})
  start()
  
}

export function addGoing(id){

  axios.post('/api/going', store.getState().user).then (resp => {
    console.log(resp.data)
  

  store.dispatch ({
    type: 'ADD_GOING',
    payload: resp.data.user
             
  })

})
  start()
  
}
