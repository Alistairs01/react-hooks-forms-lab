import React, { useState, useEffect } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  const [searchText, setSearchText] = useState(search || ""); // Initialize state with search prop

  // Update searchText state when search prop changes
  useEffect(() => {
    setSearchText(search || "");
  }, [search]);

  // Define a function to handle changes in the search input field
  const handleSearchChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    onSearchChange(text); // Pass the search text to the parent component
  };

  return (
    <div className="Filter">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
