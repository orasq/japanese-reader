import React, { useEffect } from "react";
import { FaSearch, FaTimesCircle } from "react-icons/fa";

function HomeFilter() {
  return (
    <div className="search">
      <div className="search__search-group">
        <FaSearch className="search__search-icon" />
        <input className="search__field" type="text" placeholder="Search..." />
        <FaTimesCircle className="search__delete-btn search__delete-btn--visible" />
      </div>
      <div className="search__filter-wrap">
        <div className="search__checkbox-group">
          <input id="finished" type="checkbox" />
          <label htmlFor="finished">Already read</label>
        </div>
        <div className="search__checkbox-group">
          <input id="alphabetical" type="checkbox" />
          <label htmlFor="alphabetical">A → Z</label>
        </div>
      </div>
    </div>
  );
}

export default HomeFilter;
