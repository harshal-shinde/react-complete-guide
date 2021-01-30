import React, { useState, useEffect } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const app = props => {
 const [userName, setUsername] = useState("Harshal");

 const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
 } 

 
  return (
    <div>
      <UserInput 
      changed={userNameChangeHandler}
      currentName={userName}
      />
      <UserOutput userName={userName}/>
      <UserOutput userName={userName}/>
      <UserOutput userName={userName}/>
    </div>
    );
}

export default app;


