import React from "react";

export default function Item({ item }) {
  return (
    <li className="bg-gray-800 p-4 rounded flex flex-col">
      <span className="text-lg font-bold text-white">
        {item.name}{" "}
        <span role="img" aria-label={item.category.toLowerCase()}>
          {item.category === "Produce" && "🍌"}
          {item.category === "Bakery" && "🍞"}
          {item.category === "Dairy" && "🥛"}
          {item.category === "Meat" && "🍗"}
          {item.category === "Household" && "🧼"}
        </span>
      </span>
      <span className="text-sm text-gray-400">
        Buy {item.quantity} in {item.category.toLowerCase()}
      </span>
    </li>
  );
}
