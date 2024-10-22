"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");

  // Sort the items based on the selected sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  // Group the items by category if sortBy is "grouped"
  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Sort by:</h2>
      <div className="mb-4">
        <button
          className={`px-4 py-2 mr-2 ${
            sortBy === "name" ? "bg-orange-500" : "bg-gray-500"
          } text-white`}
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className={`px-4 py-2 mr-2 ${
            sortBy === "category" ? "bg-orange-500" : "bg-gray-500"
          } text-white`}
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
        <button
          className={`px-4 py-2 ${
            sortBy === "grouped" ? "bg-orange-500" : "bg-gray-500"
          } text-white`}
          onClick={() => setSortBy("grouped")}
        >
          Grouped Category
        </button>
      </div>

      {sortBy === "grouped" ? (
        // Render items grouped by category
        Object.keys(groupedItems).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-lg font-bold mb-2 capitalize">{category}</h3>
            <ul>
              {groupedItems[category].map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        // Render sorted items (by name or category)
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
