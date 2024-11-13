"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([
    { name: "Chicken Breast, 1 kg 🍗", quantity: "1 kg", category: "Meat" },
  ]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // If not authenticated, don't render the page
  if (!user) {
    window.location.href = "/week-9";
    return null;
  }

  function handleItemSelect(itemName) {
    const cleanName = itemName
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g,
        ""
      )
      .split(",")[0]
      .trim();
    setSelectedItemName(cleanName);
  }

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping List</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Signed in as {user.displayName || user.email}
            </span>
            <a
              href="/week-9"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex-1">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex-1">
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}
