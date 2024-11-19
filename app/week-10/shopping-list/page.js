"use client";

import React, { useEffect, useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";

const ShoppingList = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    const loadItems = async () => {
      if (user) {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      }
    };
    loadItems();
  }, [user]);

  const handleAddItem = async () => {
    if (name.trim() === "") return;

    const newItem = { name, quantity, category };
    const id = await addItem(user.uid, newItem);

    setItems((prevItems) => [...prevItems, { id, ...newItem }]);

    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  const handleSort = (key) => {
    setSortBy(key);
    const sortedItems = [...items].sort((a, b) => a[key].localeCompare(b[key]));
    setItems(sortedItems);
  };

  return (
    <div style={styles.container}>
      <h1>Shopping List</h1>
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <div style={styles.quantityControls}>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.select}
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
        </div>
        <button onClick={handleAddItem} style={styles.addButton}>
          +
        </button>
      </div>
      <div style={styles.sortControls}>
        <span>Sort by:</span>
        <button onClick={() => handleSort("name")} style={styles.sortButton}>
          Name
        </button>
        <button
          onClick={() => handleSort("category")}
          style={styles.sortButton}
        >
          Category
        </button>
      </div>
      <div style={styles.itemsList}>
        {items.map((item) => (
          <div key={item.id} style={styles.item}>
            <strong>{item.name}</strong>
            <p>
              Buy {item.quantity} in {item.category.toLowerCase()}
            </p>
          </div>
        ))}
      </div>
      <div style={styles.mealIdeas}>
        <h3>Meal Ideas</h3>
        <p>Select an item to see meal ideas</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#101020",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  select: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    fontSize: "24px",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    cursor: "pointer",
  },
  sortControls: {
    marginBottom: "20px",
  },
  sortButton: {
    backgroundColor: "#f97316",
    color: "#fff",
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
    margin: "0 5px",
    cursor: "pointer",
  },
  itemsList: {
    backgroundColor: "#1a1a2e",
    padding: "20px",
    borderRadius: "10px",
    margin: "20px 0",
  },
  item: {
    backgroundColor: "#28293e",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    textAlign: "left",
  },
  mealIdeas: {
    marginTop: "20px",
    textAlign: "left",
  },
};

export default ShoppingList;
