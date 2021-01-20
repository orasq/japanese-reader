import React from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";

function SearchField(props) {
  return (
    <div className="search__search-group">
      <FaSearch className="search__search-icon" />
      <input
        className="search__field"
        type="text"
        placeholder="Search..."
        onChange={e => props.setSearchKeyword(e.target.value)}
      />
      <FaTimesCircle className="search__delete-btn search__delete-btn--visible" />
    </div>
  );
}

export default SearchField;
