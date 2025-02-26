import React, { useState } from "react";
import {
  Choice,
  choices,
  getRandomChoice,
  determineWinner,
} from "../utils/gameLogic";
import ChoiceButton from "./ChoiceButton";
import ResultDisplay from "./ResultDisplay";

const Game: React.FC = () => {
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [cpuChoice, setCpuChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const handleUserChoice = (choice: Choice) => {
    const cpu = getRandomChoice();
    setUserChoice(choice);
    setCpuChoice(cpu);
    setResult(determineWinner(choice, cpu));
  };

  const resetGame = () => {
    setUserChoice(null);
    setCpuChoice(null);
    setResult("");
  };

  return (
    <div className="game">
      <ResultDisplay
        userChoice={userChoice}
        cpuChoice={cpuChoice}
        result={result}
      />
      <div className="choices">
        {choices.map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            onClick={handleUserChoice}
          />
        ))}
      </div>
      <button className="fancy-button" onClick={resetGame}>Restart Game</button>
    </div>
  );
};

export default Game;
