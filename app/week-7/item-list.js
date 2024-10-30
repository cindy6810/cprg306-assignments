import React from "react";
import Item from "./item";

export default function ItemList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
