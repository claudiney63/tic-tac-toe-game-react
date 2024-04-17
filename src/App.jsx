import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [log, setLog] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivedPlayer(rowIndex, cellIndex) {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
    setLog((prev) => {
      let currentPlayer = "X";

      if (prev.length > 0 && prev[0].player === "X") {
        currentPlayer = "O";
      }

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
            turns={log}
          />
        </div>
        <Log turns={log}/>
      </main>
    </>
  );
}

export default App;
