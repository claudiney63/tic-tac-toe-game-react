import { useState } from "react";

export default function Player({ name, symbol, activedPlayer }) {
  const [editName, setEditName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <li className={activedPlayer ? 'active' : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required defaultValue={editName} onChange={(e) => setEditName(e.target.value)}/>
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
