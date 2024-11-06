"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

function Page() {
  const [items, setItems] = useState([
    { name: "Chicken Breast, 1 kg 🍗", quantity: "1 kg", category: "Meat" },
    // Add more items or load from a JSON file
  ]);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(itemName) {
    // Clean up item name to match API requirements
    const cleanName = itemName
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      )
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanName);
  }

  return (
    <div style={{ display: "flex" }}>
      <div>
        <NewItem setItems={setItems} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </div>
  );
}

export default Page;
