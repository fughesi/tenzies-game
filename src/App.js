import React from "react";
import Header from "./components/header/Header";
import Die from "./components/die/Die";
import Button from "./components/button/Button";

import "./App.css";

function App() {
  // state variables
  const [dice, setDice] = React.useState(allNewDice);

  // generates an array of 10 random numbers
  function allNewDice() {
    const numArray = [];
    for (let i = 0; i < 10; i++) {
      let x = Math.ceil(Math.random() * 6);
      numArray.push(x);
    }
    return numArray;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  // This creates the 10 dice componenets c random nums
  const newDice = dice.map((i) => <Die value={i} />);

  return (
    <div id="page">
      <div id="mainContainer">
        <div id="mainLayout">
          <Header />
          <div id="diceComponents">{newDice}</div>
          <Button rollDice={rollDice} />
        </div>
      </div>
    </div>
  );
}

export default App;
