import React, { useState } from "react";
import "./App.css";
import { PlayGrid } from "./components/play-grid";
import { ScoreGrid } from "./components/score-grid";

function App() {
  const [turnX, setTurnX] = useState(true);

  const switchTurn = (): void => {
    setTurnX(!turnX);
  };

  return (
    <div className="App">
      <ScoreGrid turnX={turnX} />
      <PlayGrid turnX={turnX} switchTurn={switchTurn} />
    </div>
  );
}

export default App;
