import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.clicked}>
          I'm {this.props.name} and {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </div>
    );
  }
}

export default Person;
