import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default props => {

  const notGoing = useSelector(appState => appState.notgoing)

  return (
    <div>
    


    <Link style= {{textDecoration:'none'}} to="/">
    <div className="links2">back</div>
    </Link>

      <p className="back">NOT Attending!</p>

      <div className="container">
      {notGoing.map(invitee => (
      
      <div className="inviteesmall" key={Math.random(100)}>
        <p><img src={invitee.picture.large} alt="invitee"/></p>
        <p>{invitee.name.first} {invitee.name.last}</p>
        <p>{invitee.phone}</p>
        <p>{invitee.email}</p>
        </div>
    ))}
    </div>

    
    </div>
  )
   }