import React from "react";

function SearchBar({ term, setTerm }) {
  return (
    <div className="searchbar-container">
      <input
        className="search-input"
        placeholder="search notes"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
