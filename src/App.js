import React from "react";
import Button from "./components/button/Button"
import Die from "./components/die/Die";
import Header from "./components/header/Header"
import "./App.css";

function App() {
  const value = Math.ceil(Math.random(6));

  return (
    <div id="page">
      <div id="mainContainer">
        <div id="mainLayout">
          <Header />
          <div id="diceComponents">
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
            <Die value={value} />
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default App;
