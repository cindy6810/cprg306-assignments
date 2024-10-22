const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-2 mb-2 bg-gray-800 text-white rounded-lg">
      <strong>{name}</strong>
      <p>
        Buy {quantity} in {category}
      </p>
    </li>
  );
};

export default Item;
