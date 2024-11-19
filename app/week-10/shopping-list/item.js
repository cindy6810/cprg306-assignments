function Item({ item, onSelect }) {
  return (
    <div onClick={() => onSelect(item.name)} style={{ cursor: "pointer" }}>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Category: {item.category}</p>
    </div>
  );
}

export default Item;
