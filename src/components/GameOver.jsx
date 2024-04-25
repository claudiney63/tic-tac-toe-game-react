export default function GameOver({ winner, onRestatGame }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner ? <p>{winner} Won!</p> : <p>It's a draw!</p>}
      <p>
        <button onClick={onRestatGame}>Rematch!</button>
      </p>
    </div>
  );
}
