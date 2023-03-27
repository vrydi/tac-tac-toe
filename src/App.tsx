import React from "react";
import "./App.css";
import { PlayGrid } from "./components/play-grid";
import { ScoreGrid } from "./components/score-grid";

function App() {
  return (
    <div className="App">
      <ScoreGrid />
      <PlayGrid />
    </div>
  );
}

export default App;
