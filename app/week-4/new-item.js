"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center space-x-2 border p-4 rounded-lg shadow-md bg-black">
      <span className="text-lg font-bold">{quantity}</span>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300"
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="px-4 py-2 rounded bg-blue-500 text-white disabled:bg-gray-300"
      >
        +
      </button>
    </div>
  );
}
