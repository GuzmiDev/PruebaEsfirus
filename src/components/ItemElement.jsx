import React from "react";

export const ItemElement = ({ element }) => {
  const { id, name, items } = element;

  return (
    <li className="list-group-item">
      {id} - {name}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </li>
  );
};
