import React, { useState } from "react";
import "./App.css";
import { PlayGrid } from "./components/play-grid";
import { ScoreGrid } from "./components/score-grid";

function App() {
  const [turnX, setTurnX] = useState(true);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [score, setScore] = useState({ x: 0, o: 0 });

  const switchTurn = (): void => {
    setTurnX(!turnX);
  };

  const finishGame = (win: boolean | false): void => {
    if (!win) resetGame();
    const newScore = score;
    if (turnX) newScore.x++;
    else newScore.o++;
    setScore(newScore);
    resetGame();
  };

  const resetGame = (): void => {
    setNumberOfGames(numberOfGames + 1);
    setTurnX(true);
  };

  return (
    <div className="App">
      <ScoreGrid turnX={turnX} score={score} />
      <PlayGrid
        key={numberOfGames}
        turnX={turnX}
        switchTurn={switchTurn}
        finishGame={finishGame}
      />
      <div className="button-wrapper">
        <button id="reset-button" onClick={() => resetGame()}>
          RESET {numberOfGames}
        </button>
      </div>
    </div>
  );
}

export default App;
