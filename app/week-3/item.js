import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border-black bg-blue-950 p-4 mb-2 rounded-lg shadow-md w-1/3 h-17">
      <div className="font-extrabold text-md text-xl">{name}</div>
      <div className="font-bold text-sm">
        Buy {quantity} in {category}
      </div>
    </li>
  );
};

export default Item;
