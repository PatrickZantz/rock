import React from "react";
import "./App.css";
import Game from "../components/Game";

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Rock Paper Scissors</h1>
      <Game />
    </div>
  );
};

export default App;
