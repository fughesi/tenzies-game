import React from "react";
import Header from "./components/header/Header";
import Die from "./components/die/Die";
import Button from "./components/button/Button";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  // state variables
  const [dice, setDice] = React.useState(allNewDice);

  // generates an array of 10 random numbers
  function allNewDice() {
    let numObject = {};
    let numArray = [];
    for (let i = 0; i < 10; i++) {
      numObject = {
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      };
      numArray.push(numObject);
    }
    return numArray;
  }

  // roll the dice
  function rollDice() {
    setDice(allNewDice());
  }
console.log(dice)
  // This creates the 10 dice componenets c random nums
  const newDice = dice.map((i) => <Die key={i.id} value={i.value} isHeld={i.isHeld} />);

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
