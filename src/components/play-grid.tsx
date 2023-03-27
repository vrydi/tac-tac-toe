import { useEffect, useState } from "react";

export function PlayGrid() {
  const [board, setBoard] = useState(() => [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ]);

  function onFieldClick(rowNumber: number, columnNumber: number): void {
    board[rowNumber][columnNumber] = "x";
    console.log("click", rowNumber, columnNumber, board);
    setBoard([...board]);
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
      onClick={() => props.onFieldClick(props.rowNumber, props.columnNumber)}
    >
      {!props.content.includes(".") && props.content}
    </div>
  );
}
