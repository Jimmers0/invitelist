import React from 'react'
import { useSelector } from 'react-redux'
import { addNotGoing } from '../actions/example.actions';
import { addGoing } from '../actions/example.actions';
import { Link } from 'react-router-dom'
import Button from './Button';
import Going from './Going';


export default props => {
  const user = useSelector(appState => appState.user)
  const goingusers = useSelector(appState => appState.going)
  const notgoingusers = useSelector(appState => appState.notgoing)

  function setNotGoing() {
    addNotGoing(user.id)
  }

  function setGoing() {
    addGoing(user.id)
  }

  console.log('going',goingusers)
  console.log('notgoing',notgoingusers)


  return (

    
   
    <div className="maincontainer">

    <Button/>  
    <p className="gng">Going: {goingusers.length}</p>
    <p className="gng">NotGoing: {notgoingusers.length}</p> 
  
    
    <div className="invitee">
    
    <img src={user.image} className="img" />
    <p><b>Name:</b> {user.fname} {user.lname}</p>
    <p><b>Phone:</b> {user.phone}</p>
    <p><b>Email:</b> {user.email}</p>
    <div className="buttons">
    <button className="button" onClick={e => setNotGoing(user)} type="submit">not going</button>
    <button className="button" onClick={e => setGoing(user)} type="submit">Going</button>
    </div>
    </div>    

    <div className="linkbutton">

    <Link style= {{textDecoration:'none'}} to="/Going">
    <div className="links5">Attending</div>
    </Link>
    <Link style= {{textDecoration:'none'}} to="/Notgoing">
    <div className="links5">Not Attending</div>
    </Link>
    </div>

    </div>

    
  )
   }