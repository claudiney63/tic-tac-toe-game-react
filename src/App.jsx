import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function derivatedPlayer(log) {
  let currentPlayer = "X";

  if (log.length > 0 && log[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer
}

function App() {
  const [log, setLog] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = derivatedPlayer(log);

  let gameBoard = initialBoard

  for (const turn of log) {
    const {square, player} = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  for (combination of WINNING_COMBINATIONS) {
    const firstSquare = 0;
    const secondSquare = 0;
    const thirdSquare = 0;
  }

  function handleActivedPlayer(rowIndex, cellIndex) {


    // setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setLog((prev) => {
      
      const currentPlayer = derivatedPlayer(prev);

      const updatedLog = [
        { square: { row: rowIndex, col: cellIndex }, player: currentPlayer },
        ...prev,
      ];

      return updatedLog;
    });
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              activedPlayer={activePlayer === "X"}
            />
            <Player
              name="Player 2"
              symbol="O"
              activedPlayer={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectedSquare={handleActivedPlayer}
            board={gameBoard}
          />
        </div>
        <Log turns={log}/>
      </main>
    </>
  );
}

export default App;
