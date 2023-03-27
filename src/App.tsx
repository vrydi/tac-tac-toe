import React, { useState } from "react";
import "./App.css";
import { PlayGrid } from "./components/play-grid";
import { ScoreGrid } from "./components/score-grid";

function App() {
  const [board, setBoard] = useState([
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ]);

  return (
    <div className="App">
      <ScoreGrid />
      <PlayGrid board={board} />
    </div>
  );
}

export default App;
