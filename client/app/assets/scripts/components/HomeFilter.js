import React, { useContext } from "react";

// context import
import StateContext from "../contexts/StateContext";
import DispatchContext from "../contexts/DispatchContext";

// components import
import SearchField from "./SearchField";
import Checkbox from "./Checkbox";

function HomeFilter(props) {
  // contexts
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  // functions
  function toggleFinishedFilter() {
    appDispatch({ type: "TOGGLE_FINISHED_FILTER" });
  }
  function toggleAlphabeticalFilter() {
    appDispatch({ type: "TOGGLE_ALPHABETICAL_FILTER" });
  }

  return (
    <div className="search">
      <SearchField setSearchKeyword={props.setSearchKeyword} />
      <div className="search__filter-wrap">
        <Checkbox
          field="finished"
          label="Hide already read"
          checked={appState.finishedFilter}
          onChange={toggleFinishedFilter}
        />
        <Checkbox
          field="alphabetical"
          label="A → Z"
          checked={appState.alphabeticalFilter}
          onChange={toggleAlphabeticalFilter}
        />
      </div>
    </div>
  );
}

export default HomeFilter;
