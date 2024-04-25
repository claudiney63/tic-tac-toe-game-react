import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

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

  let gameBoard = [...initialBoard.map(arr => [...arr])]

  for (const turn of log) {
    const {square, player} = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  let winner = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = firstSquare
    }
  }

  let hasDraw = log.length === 9 && !winner

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

  function handleRestatGame() {
    setLog([]);
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
          {(winner || hasDraw) && <GameOver winner={winner} onRestatGame={handleRestatGame}/>}
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
