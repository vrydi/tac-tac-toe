export function ScoreGrid() {
  return (
    <div id="score-grid">
      <div className="score-field player-x active">
        <p>Player X</p>
        <p>0</p>
      </div>
      <div className="score-field player-o">
        <p>Player O</p>
        <p>0</p>
      </div>
    </div>
  );
}
