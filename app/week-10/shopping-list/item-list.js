import React from "react";
import Item from "./item";

function ItemList({ items, onItemSelect }) {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={index} item={item} onSelect={onItemSelect} />
      ))}
    </div>
  );
}

export default ItemList;
