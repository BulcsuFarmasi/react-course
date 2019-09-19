import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Bulcsú', age: 27 },
      { name: 'Dorka', age: 51 },
      { name: 'Peti', age: 28 },
    ]
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <button>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
