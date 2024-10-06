import GroceryItem from "./GroceryItem";

export default function GroceryItemList({ items, setUpdate }) {
  return (
    <div className="GroceryItemList">
      <h2>Grocery List</h2>
      {items.map((item) => (
        <GroceryItem key={item.name} {...item} setUpdate={setUpdate} />
      ))}
    </div>
  );
}
