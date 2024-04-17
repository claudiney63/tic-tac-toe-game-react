export default function GameBoard({ onSelectedSquare, board }) {
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
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => onSelectedSquare(rowIndex, cellIndex)}
                  disabled={symbol != null}
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
