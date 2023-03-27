import { useState } from "react";

export function PlayGrid(props: { turnX: boolean; switchTurn: () => void }) {
  const [board, setBoard] = useState(() => [
    [".", ".", "."],
    [".", ".", "."],
    [".", ".", "."],
  ]);

  function onFieldClick(rowNumber: number, columnNumber: number): void {
    board[rowNumber][columnNumber] = props.turnX ? "x" : "o";
    const win = checkForWin(board);
    console.log(win);
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

function checkForWin(board: string[][]) {
  if (checkRows(board)) return true;
  const transposedBoard = transpose(board);
  if (checkRows(transposedBoard)) return true;
  if (checkDiagonal(board)) return true;
  return false;
}

function checkRows(board: string[][]): boolean {
  let flag = false;
  board.forEach((row: string[]) => {
    switch (JSON.stringify(row)) {
      case JSON.stringify(["x", "x", "x"]):
      case JSON.stringify(["o", "o", "o"]):
        flag = true;
        break;
    }
  });
  return flag;
}

function checkDiagonal(board: string[][]): boolean {
  if (board[0][0] === "x" && board[1][1] === "x" && board[2][2] === "x")
    return true;
  if (board[0][2] === "x" && board[1][1] === "x" && board[2][0] === "x")
    return true;
  if (board[0][0] === "o" && board[1][1] === "o" && board[2][2] === "o")
    return true;
  if (board[0][2] === "o" && board[1][1] === "o" && board[2][0] === "o")
    return true;
  return false;
}

function transpose(matrix: any[][]): any[][] {
  const rows = matrix.length,
    cols = matrix[0].length;
  const grid = [];
  for (let j = 0; j < cols; j++) {
    grid[j] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = matrix[i][j];
    }
  }
  return grid;
}
