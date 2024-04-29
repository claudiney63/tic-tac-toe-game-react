import { useState } from "react";

export default function Player({ name, symbol, activedPlayer, editPlayerName }) {
  const [editName, setEditName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeName(e) {
    setEditName(e.target.value);
    editPlayerName(symbol, e.target.value);
  }

  console.log("Player render", editName);
  return (
    <li className={activedPlayer ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={editName} onChange={(e) => handleChangeName(e)}/>
        ) : (
          <span className="player-name">{editName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing(editing => !editing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
