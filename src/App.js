import React from "react";
import Header from "./components/header/Header";
import Die from "./components/die/Die";
import Button from "./components/button/Button";
import { nanoid } from "nanoid";
import "./App.css";
import "./components/die/Die.css";

function App() {
  // state variables
  const [dice, setDice] = React.useState(allNewDice);

  // generates an array of 10 random numbers
  function allNewDice() {
    let numObject = {};
    let numArray = [];
    for (let i = 0; i < 10; i++) {
      numObject = diceParts();
      numArray.push(numObject);
    }
    return numArray;
  }

  // roll the dice
  function rollDice() {
    setDice((i) => {
      return i.map((x) => {
        return x.isHeld ? x : diceParts();
      });
    });
  }

  function diceParts() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  // Holds the selected die
  function holdDice(id) {
    setDice((i) => {
      return i.map((x) => {
        console.log(x.id, id, x.isHeld);
        return x.id === id ? { ...x, isHeld: !x.isHeld } : x;
      });
    });
  }

  // This creates the 10 dice componenets c random nums
  const newDice = dice.map((i) => (
    <Die
      key={i.id}
      id={i.id}
      value={i.value}
      isHeld={i.isHeld}
      className="selectedDice"
      holdDice={() => holdDice(i.id)}
    />
  ));

  return (
    <div id="page">
      <div id="mainContainer">
        <div id="mainLayout">
          <Header />
          <div id="diceComponents" className="diceBox">
            {newDice}
          </div>
          <Button rollDice={rollDice} />
        </div>
      </div>
    </div>
  );
}

export default App;
