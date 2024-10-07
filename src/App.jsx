import { useEffect } from "react";
import { useState } from "react";
import GroceryItemList from "./GroceryItemList";
import NewItemForm from "./NewItemForm";
import API_ENDPOINTS from "./config/api";

export default function App() {
  const [update, setUpdate] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, [update]);

  async function getItems() {
    const res = await fetch(API_ENDPOINTS.ITEMS);
    const data = await res.json();
    setItems(data);
  }

  return (
    <div className="App">
      <h1>My Grocery App</h1>
      <GroceryItemList items={items} setUpdate={setUpdate} />
      <NewItemForm setUpdate={setUpdate} />
    </div>
  );
}
