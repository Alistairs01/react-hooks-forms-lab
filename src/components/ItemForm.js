import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setItemCategory(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };
    console.log("new item:",newItem)
    // Pass the new item to the parent component
    onItemFormSubmit(newItem);
    // Reset form fields after submission
    setItemName("");
    setItemCategory("Produce");
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input
          type="text"
          value={itemName}
          onChange={handleNameChange}
          required
        />
      </label>
      <label>
        Category:
        <select value={itemCategory} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit" className="add-item-btn">Add Item</button>
    </form>
  );
}

export default ItemForm;
