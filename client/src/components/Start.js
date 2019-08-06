import React from 'react'
import { useSelector } from 'react-redux'
import { addNotGoing } from '../actions/example.actions';
import { addGoing } from '../actions/example.actions';
import { Link } from 'react-router-dom'
import Button from './Button';

export default props => {
  const start = useSelector(appState => appState.start)
  


  return (

    
   
    <div className="maincontainer">

    <Button/>   
      
    {start != 0 ? start.results.map(invitee => (
      console.log(start),
      <div className="invitee" key={Math.random(100)}>
        <p><img className="img" src={invitee.picture.large} alt="invitee"/></p>
        <p>{invitee.name.first} {invitee.name.last}</p>
        <p>{invitee.phone}</p>
        <p>{invitee.email}</p>
        <div className="buttons">
        <button className="button" onClick={e => addNotGoing(invitee)} type="submit">not going</button>
        <button className="button" onClick={e => addGoing(invitee)} type="submit">Going</button>
        </div>
        </div>
    )) : ''}

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