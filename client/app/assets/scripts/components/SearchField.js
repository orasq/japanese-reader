import React, { useContext } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";

// contexts import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";

function SearchField() {
  // context
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  return (
    <div className="search__search-group">
      <FaSearch className="search__search-icon" />
      <input
        className="search__field"
        type="text"
        placeholder="Search..."
        value={appState.searchKeyword}
        onChange={e => appDispatch({ type: "UPDATE_SEARCH_KEYWORD", value: e.target.value })}
      />
      <FaTimesCircle
        onClick={e => appDispatch({ type: "UPDATE_SEARCH_KEYWORD", value: "" })}
        className="search__delete-btn search__delete-btn--visible"
      />
    </div>
  );
}

export default SearchField;
