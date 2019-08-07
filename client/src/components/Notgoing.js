import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addGoing } from '../actions/example.actions';



export default props => {

  const notgoing = useSelector(appState => appState.notgoing)

 

  return (
    
    <div className="container">
      <Link style={{textDecoration: 'none'}} to="/">
        <div className="back">Back</div>
      </Link>

      <div className="container">
      {notgoing.map((user, i) => (
        <div key={'user' + i} className="inviteesmall"> 
          <img src={user.image} />
          <p><b>Name:</b> {user.fname} {user.lname}</p>
          <p><b>Phone:</b> {user.phone}</p>
          <p><b>Email:</b> {user.email}</p>
          </div>
      ))}
      </div>



    </div>
  )
   }