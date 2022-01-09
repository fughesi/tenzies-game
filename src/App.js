import React from "react";
import Header from "./components/header/Header";
import Die from "./components/die/Die";
import Button from "./components/button/Button";
import { nanoid } from "nanoid";
import "./App.css";
import "./components/die/Die.css";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
  // state variables
  const [dice, setDice] = React.useState(allNewDice);
  const [tenzies, setTenzies] = React.useState(false);

  // checks to see if player won
  React.useEffect(() => {
    const die = dice[0].value;
    const x = dice.every((i) => i.isHeld === true);
    const y = dice.every((i) => i.value === die);
    if (x === true && y === true) {
      setTenzies(true);
      console.log("winner");
    }
  }, [dice]);

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

  // Helper function to reconstruct the dice in 2 other funcs
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
      {tenzies && <Confetti />}
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
