import { useState } from "react";
import axios from "axios";
import API_ENDPOINTS from "./config/api";

export default function NewItemForm({ setUpdate }) {
  const [item, setItem] = useState("");
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      console.log(item);
      const newItem = {
        name: item,
        have: false,
      };
      console.log(newItem);

      // use axios to post data
      const response = await axios.post(API_ENDPOINTS.ITEMS, newItem, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      console.log(`POST response: ${response.data}`);

      setUpdate((prev) => !prev); // toggle state to trigger a refetch from backend
      setItem("");
    } catch (error) {
      console.log(`Error in posting new item: ${error}`);
    }
  }
  return (
    <div className="NewItemForm">
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}
