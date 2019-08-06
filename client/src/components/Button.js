import React from 'react'
import { start } from '../actions/example.actions'

export default props => {
  function sendStart() {
    start()
    console.log('button pressed')
  }

  return (
    <button className="button1" onClick={sendStart}>Click to start</button>
  )
}