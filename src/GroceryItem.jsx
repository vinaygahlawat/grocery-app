import axios from "axios";
import API_ENDPOINTS from "./config/api";

export default function GroceryItem({ name, have, setUpdate }) {
  async function handleDelete(name) {
    const payload = {
      name: name,
    };
    console.log(`Delete clicked for ${JSON.stringify(payload)}`);
    try {
      const response = await axios.delete(
        API_ENDPOINTS.ITEMS,
        { data: payload },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      console.log(`Delete response: ${JSON.stringify(response)}`);
      setUpdate((prev) => !prev); // toggle state to trigger a refetch from backend
    } catch (error) {
      console.log(`Error when trying to delete ${name}. `, error);
    }
  }

  return (
    <div className="GroceryItem">
      <div>
        GroceryItem: {name} {!have ? "" : " --> (Out of stock)"}
        <span>
          <button onClick={() => handleDelete(name)}>🗑️</button>
        </span>
      </div>
    </div>
  );
}
