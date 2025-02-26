import React from "react";
import { Choice } from "../utils/gameLogic";

interface Props {
  userChoice: Choice | null;
  cpuChoice: Choice | null;
  result: string;
}

const ResultDisplay: React.FC<Props> = ({ userChoice, cpuChoice, result }) => {
  return (
    <div className="result-display">
      <p>You choose: {userChoice || "-"}</p>
      <p>CPU choose: {cpuChoice || "-"}</p>
      <p>Result: {result || "-"}</p>
    </div>
  );
};

export default ResultDisplay;
