import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combination";
import GameOver from "./components/GameOver";

const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
}

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

function derivatedGameBoard(log) {
  let gameBoard = [...initialBoard.map(arr => [...arr])]

  for (const turn of log) {
    const {square, player} = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }
  return gameBoard
}

function derivatedWinner(gameBoard, players) {
  let winner = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column];
    const secondSquare = gameBoard[combination[1].row][combination[1].column];
    const thirdSquare = gameBoard[combination[2].row][combination[2].column];

    if(firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = players[firstSquare]
    }
  }

  return winner
}

function App() {
  const [players, setPlayers] = useState(PLAYERS) 
  const [log, setLog] = useState([]);

  const activePlayer = derivatedPlayer(log);

  const gameBoard = derivatedGameBoard(log)

  const winner = derivatedWinner(gameBoard, players)

  let hasDraw = log.length === 9 && !winner

  function handleActivedPlayer(rowIndex, cellIndex) {

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

  function newNamePlayer(symbol, newName) {
    setPlayers((prev) => ({
      ...prev,
      [symbol]: newName
    }))
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={PLAYERS.X}
              symbol="X"
              activedPlayer={activePlayer === "X"}
              editPlayerName={newNamePlayer}
            />
            <Player
              name={PLAYERS.O}
              symbol="O"
              activedPlayer={activePlayer === "O"}
              editPlayerName={newNamePlayer}
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
