import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex space-x-2 items-center bg-gray-800 p-4 rounded"
    >
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="bg-gray-700 text-white px-4 py-2 rounded w-full"
      />
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity <= 1}
          className="px-2 py-1 bg-gray-700 text-white rounded"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="bg-gray-700 text-white text-center w-12"
        />
        <button
          type="button"
          onClick={() => setQuantity(quantity + 1)}
          className="px-2 py-1 bg-gray-700 text-white rounded"
        >
          +
        </button>
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="bg-gray-700 text-white px-4 py-2 rounded"
      >
        <option>Produce</option>
        <option>Dairy</option>
        <option>Bakery</option>
        <option>Meat</option>
        <option>Frozen Foods</option>
        <option>Canned Goods</option>
        <option>Dry Goods</option>
        <option>Beverages</option>
        <option>Snacks</option>
        <option>Household</option>
        <option>Other</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        +
      </button>
    </form>
  );
}
