import React from "react";
import "./Die.css";

export default function Die(props) {
  return (
    <>
      <div
        className={props.isHeld === true ? "dice selectedDice" : "dice "}
        onClick={props.holdDice}
      >
        <h3>{props.value}</h3>
      </div>
    </>
  );
}
