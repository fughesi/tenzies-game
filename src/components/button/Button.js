import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div id="button" onClick={props.rollDice}>
      {/* {tenzies ? "start new game" : "Roll"} */}
    </div>
  );
}
