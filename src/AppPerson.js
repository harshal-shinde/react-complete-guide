import React, { useState, useEffect } from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {

 const [personaState, setPersonState] = useState ({
    persons : [
      {name : "harshal", age :32},
      {name : "pm", age :30},
      {name : "vishal", age :26},
    ]
  })

  const [otherState, setOtherState] = useState("Some othe value");

  console.log(personaState, otherState);
  
  const switchNameHandler = (newName) => {
    setPersonState({
      persons : [
      {name : newName, age :32},
      {name : "Shinde", age :30},
      {name : "Shinde", age :26},
    ] })
    console.log("Was clicked");
  }

  const nameChangeHandler = (event) => {
    setPersonState({
      persons:[
        {name : "Sachin", age:37},
        {name : event.target.value, age:33},
        {name : "Deepti", age:31}
      ]
    })
  }
  const style = {
    backgroundColor : 'white',
    font:'inherit',
    border: "1x solid blue",
    padding: '8px',
    cursor: 'pointer'
  }
    return (
      <div className="App">
        <h1>Hi , I am react</h1>

        <button 
        onClick={()=>switchNameHandler("Rock")}
        style={style}
        >Switch Name</button>

        <Person name={personaState.persons[0].name} age={personaState.persons[0].age}>
          My hobbies : Cricket
        </Person>
        <Person 
          name={personaState.persons[1].name} 
          age={personaState.persons[1].age}
          click={switchNameHandler.bind(this, 'On the Rocks')}
          change={nameChangeHandler}
          >
          My hobbies : Fussball
        </Person>
        <Person name={personaState.persons[2].name} age={personaState.persons[2].age}>
          My hobbies : machine Learning
        </Person>
      </div>
    );
}

export default app;


