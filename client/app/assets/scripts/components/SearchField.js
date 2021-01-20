import React, { useContext } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";

// contexts import
import DispatchContext from "../contexts/DispatchContext";

function SearchField() {
  // context
  const appDispatch = useContext(DispatchContext);

  return (
    <div className="search__search-group">
      <FaSearch className="search__search-icon" />
      <input
        className="search__field"
        type="text"
        placeholder="Search..."
        onChange={e => appDispatch({ type: "UPDATE_SEARCH_KEYWORD", value: e.target.value })}
      />
      <FaTimesCircle className="search__delete-btn search__delete-btn--visible" />
    </div>
  );
}

export default SearchField;
