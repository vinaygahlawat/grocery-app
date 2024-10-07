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

  async function handleClick(name, have) {
    const payload = {
      name: name,
      have: have,
    };
    payload.have = !have;
    try {
      const response = await axios.put(
        API_ENDPOINTS.ITEMS,
        { data: payload },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          },
        }
      );
      console.log(`Update response: ${JSON.stringify(response)}`);
      setUpdate((prev) => !prev);
    } catch (error) {
      console.log(`Error when trying to click ${name}. `, error);
    }
  }

  const styleStrikeThrough = {
    color: "grey",
    textDecoration: "line-through",
  };

  const styleNormal = {
    color: "black",
  };

  return (
    <div className="GroceryItem">
      <div>
        <span
          style={have ? styleStrikeThrough : styleNormal}
          onClick={() => handleClick(name, have)}
        >
          GroceryItem: {name}
        </span>
        <span>
          <button onClick={() => handleDelete(name)}>🗑️</button>
        </span>
      </div>
    </div>
  );
}
