import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [log, setLog] = useState([]); 
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivedPlayer() {
    setActivePlayer((prev) => (prev === "X" ? "O" : "X"));
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
            symbolPlayer={activePlayer}
          />
        </div>
        <Log/>
      </main>
    </>
  );
}

export default App;
