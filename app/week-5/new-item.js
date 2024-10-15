"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1); // Assuming quantity from Week 4
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      name,
      quantity,
      category,
    };

    console.log(item);
    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    // Resetting form fields
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-800 rounded-lg text-black max-w-md mx-auto space-y-4"
    >
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name"
          required
          className="w-full p-2 rounded-lg bg-white text-black"
        />
      </div>

      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={decrementQuantity}
          className="p-4 border border-gray-600 rounded-lg bg-blue-700 hover:bg-blue-400"
        >
          -
        </button>

        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="w-24 p-4 border border-gray-600 rounded-lg bg-white text-black text-center"
        />

        <button
          type="button"
          onClick={incrementQuantity}
          className="p-4 border border-gray-600 rounded-lg bg-blue-400 hover:bg-blue-700"
        >
          +
        </button>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-lg bg-white text-black"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full p-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition"
      >
        +
      </button>
    </form>
  );
}
