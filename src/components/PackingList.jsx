// import React from "react";

export default function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                value={item.packed}
                onChange={() => onToggleItem(item.id)}
              />
              <span
                style={item.packed ? { textDecoration: "line-through" } : {}}
              >
                {item.quantity} {item.description}
              </span>
              <button onClick={() => onDeleteItem(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
