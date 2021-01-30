import React from 'react';
import UserOutput from './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username : {props.userName}</p>
      <p>Random text 1234</p>
    </div>
  )
}

export default userOutput;