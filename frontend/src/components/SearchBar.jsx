import React from "react";

function SearchBar({ setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search by blood group or location..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;

