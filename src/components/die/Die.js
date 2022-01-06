import React from "react";
import "./Die.css"

export default function Die(props) {
  return (
    <>
      <div id="dice">{props.value}</div>
    </>
  );
}
