export function ScoreGrid(props: { turnX: boolean }) {
  return (
    <div id="score-grid">
      <div className={`score-field player-x ${props.turnX && "active"}`}>
        <p>Player X</p>
        <p>0</p>
      </div>
      <div className={`score-field player-o ${!props.turnX && "active"}`}>
        <p>Player O</p>
        <p>0</p>
      </div>
    </div>
  );
}
