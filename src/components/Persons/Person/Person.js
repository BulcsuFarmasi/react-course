import React, { Component } from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Auxiliary>
        <p key="i1" onClick={this.props.clicked}>
          I'm {this.props.name} and {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </Auxiliary>
    );
  }
}

export default Person;
