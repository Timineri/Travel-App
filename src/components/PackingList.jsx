// import React from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "Charger", quantity: 1, packed: false },
];

export default function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => {
          return (
            <li key={item.id}>
              <span
                style={item.packed ? { textDecoration: "line-through" } : {}}
              >
                {item.quantity} {item.description}
              </span>
              <button>❌</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
