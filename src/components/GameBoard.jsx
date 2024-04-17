const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectedSquare, turns }) {

  let gameBoard = initialBoard

  for (const turn of turns) {
    const {square, player} = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleSelectedSquare(row, col) {
  //   setGameBoard((prev) => {
  //     const updateBoard = [...prev.map((innerRow) => [...innerRow])];
  //     updateBoard[row][col] = symbolPlayer;
  //     return updateBoard;
  //   })

  //   onSelectedSquare();
  // };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => onSelectedSquare(rowIndex, cellIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
