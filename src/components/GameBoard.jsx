import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleSelectedSquare(row, col) {
    setGameBoard((prev) => {
      const updateBoard = [...prev.map((innerRow) => [...innerRow])];
      updateBoard[row][col] = "X";
      return updateBoard;
    })
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, cellIndex) => (
              <li key={cellIndex}>
                <button onClick={() => handleSelectedSquare(rowIndex, cellIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
