import React, { useRef, useState } from "react";
import "./App.css";
import { PlayGrid } from "./components/play-grid";
import { ScoreGrid } from "./components/score-grid";

function App() {
  const [turnX, setTurnX] = useState(true);
  const [numberOfGames, setNumberOfGames] = useState(0);
  const [score, setScore] = useState({ x: 0, o: 0 });

  const endGameModalRef = useRef<HTMLDivElement>(null);
  const endGameModalContentRef = useRef<HTMLDivElement>(null);

  const switchTurn = (): void => {
    setTurnX(!turnX);
  };

  const finishGame = (win: boolean | false): void => {
    endGameModalRef.current!.classList.remove("hidden");
    console.log(win);
    if (!win) {
      endGameModalContentRef.current!.innerText = "It's a tie!";
      setTimeout(() => {
        endGameModalRef.current!.classList.add("hidden");
      }, 3000);
      resetGame();
      return;
    }

    const newScore = score;
    if (turnX) newScore.x++;
    else newScore.o++;
    endGameModalContentRef.current!.innerText = `Player ${
      turnX ? "X" : "O"
    } has won!`;
    setTimeout(() => {
      endGameModalRef.current?.classList.add("hidden");
    }, 3000);
    setScore(newScore);
    resetGame();
  };

  const resetGame = (): void => {
    setNumberOfGames(numberOfGames + 1);
    setTurnX(true);
  };

  return (
    <div className="App">
      <div id="end-game-modal" className="modal hidden" ref={endGameModalRef}>
        <div className="modal-content">
          <h1 ref={endGameModalContentRef}>Player x has won!</h1>
          <ScoreGrid turnX={turnX} score={score} />
        </div>
      </div>
      <ScoreGrid turnX={turnX} score={score} />
      <PlayGrid
        key={numberOfGames}
        turnX={turnX}
        switchTurn={switchTurn}
        finishGame={finishGame}
      />
      <div className="button-wrapper">
        <button id="reset-button" onClick={() => resetGame()}>
          RESET GAME
        </button>
      </div>
    </div>
  );
}

export default App;
