export function ScoreGrid(props: {
  turnX: boolean;
  score: { x: number; o: number };
}) {
  return (
    <div id="score-grid">
      <div className={`score-field player-x ${props.turnX && "active"}`}>
        <p>Player X</p>
        <p>{props.score.x}</p>
      </div>
      <div className={`score-field player-o ${!props.turnX && "active"}`}>
        <p>Player O</p>
        <p>{props.score.o}</p>
      </div>
    </div>
  );
}
