import React, { Component } from "react";
import PropTypes from "prop-types";
import Aux from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css";

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus();
  }

  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p key="i1" onClick={this.props.clicked}>
          I'm {this.props.name} and {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          type="text"
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
          value={this.props.name}
          onChange={this.props.changed}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  clicked: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
