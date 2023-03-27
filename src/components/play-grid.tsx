export function PlayGrid(props: { board: string[][] }) {
  console.log(props.board);

  const fields: JSX.Element[] = [];
  props.board.forEach((row: string[], rowNumber: number) =>
    row.forEach((content: string, columnNumber: number) =>
      fields.push(
        <PlayGridField
          key={rowNumber + "-" + columnNumber}
          rowNumber={rowNumber}
          columnNumber={columnNumber}
          content={content}
        />
      )
    )
  );

  return <div id="play-grid">{fields.map((field: JSX.Element) => field)}</div>;
}

function PlayGridField(props: {
  rowNumber: number;
  columnNumber: number;
  content: string;
}) {
  return (
    <div className="play-field">
      {props.content} + {props.rowNumber} + {props.columnNumber}
    </div>
  );
}
