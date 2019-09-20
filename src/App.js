import React, { useState } from "react";
import "./App.css";

import Person from "./Person/Person";

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Bulcsú", age: 27 },
      { name: "Dorka", age: 51 },
      { name: "Peti", age: 28 }
    ]
  });

  const [otherState, setOtherState] = useState("someValue");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Buli", age: 27 },
        { name: "Dorka", age: 51 },
        { name: "Peti", age: 29 }
      ]
    });
    // DON'T DO THIS personsState.persons[0].name = 'Buli';
    // console.log('Was clicked!')
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Does this work now?")
  // );
};

export default app;
