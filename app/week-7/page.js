"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortOption, setSortOption] = useState("name");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const sortItems = (option) => {
    setSortOption(option);
    const sorted = [...items].sort((a, b) => {
      if (option === "name") return a.name.localeCompare(b.name);
      return a.category.localeCompare(b.category);
    });
    setItems(sorted);
  };

  return (
    <div className="bg-gray-900 min-h-screen p-10 text-white">
      <h1 className="text-3xl font-bold mb-5">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <div className="flex space-x-2 my-4">
        <button
          onClick={() => sortItems("name")}
          className={`px-4 py-2 rounded bg-orange-500 ${
            sortOption === "name" ? "bg-orange-600" : ""
          }`}
        >
          Name
        </button>
        <button
          onClick={() => sortItems("category")}
          className={`px-4 py-2 rounded bg-orange-500 ${
            sortOption === "category" ? "bg-orange-600" : ""
          }`}
        >
          Category
        </button>
      </div>
      <ItemList items={items} />
    </div>
  );
}
