import { db } from "../_utils/firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";

// Get shopping list items for a user
export const getItems = async (userId) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const q = query(itemsRef);
  const snapshot = await getDocs(q);
  const items = [];
  snapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

// Add a shopping list item
export const addItem = async (userId, item) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};

// Delete a shopping list item
export const deleteItem = async (userId, itemId) => {
  const itemRef = doc(db, `users/${userId}/items/${itemId}`);
  await deleteDoc(itemRef);
};
