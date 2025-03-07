import React from "react";
import { Choice } from "../utils/gameLogic";

interface Props {
  choice: Choice;
  onClick: (choice: Choice) => void;
}

const ChoiceButton: React.FC<Props> = ({ choice, onClick }) => {
  // Mappe die Icons auf die entsprechenden Dateien
  const iconMap: Record<Choice, string> = {
    rock: "./rock.png",
    paper: "./paper.png",
    scissors: "./scissors.png",
  };

  return (
    <img
      src={iconMap[choice]} // Wähle das passende Icon basierend auf der Wahl
      alt={choice}
      className="choice-button"
      onClick={() => onClick(choice)}
    />
  );
};

export default ChoiceButton;
