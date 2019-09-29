import React from "react";
import classes from "./Person.css";

const person = props => {
  console.log("[Person.js] rendering...");
  return (
    <div className={classes.Person}>
      <p onClick={props.clicked}>
        I'm {props.name} and {props.age} years old!
      </p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
