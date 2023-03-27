import { useState } from "react";

export function PlayGrid(props: { turnX: boolean; switchTurn: () => void }) {
  const [board, setBoard] = useState(() => [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ]);

  function onFieldClick(rowNumber: number, columnNumber: number): void {
    board[rowNumber][columnNumber] = props.turnX ? "x" : "o";
    setBoard([...board]);
    props.switchTurn();
  }

  const fields: JSX.Element[] = [];
  board.forEach((row: string[], rowNumber: number) =>
    row.forEach((content: string, columnNumber: number) =>
      fields.push(
        <PlayGridField
          key={rowNumber + "-" + columnNumber}
          rowNumber={rowNumber}
          columnNumber={columnNumber}
          content={content}
          onFieldClick={onFieldClick}
        />
      )
    )
  );

  return <div id="play-grid">{fields}</div>;
}

function PlayGridField(props: {
  rowNumber: number;
  columnNumber: number;
  content: string;
  onFieldClick: (rowNumber: number, columnNumber: number) => void;
}) {
  return (
    <div
      className="play-field"
      onClick={
        props.content.includes(".")
          ? () => props.onFieldClick(props.rowNumber, props.columnNumber)
          : undefined
      }
    >
      {!props.content.includes(".") && props.content}
    </div>
  );
}
