import React, { useContext } from "react";

// context import
import StateContext from "../contexts/StateContext";
import DispatchContext from "../contexts/DispatchContext";

// components import
import SearchField from "./SearchField";
import Checkbox from "./Checkbox";

function HomeFilter() {
  // contexts
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  // functions
  function toggleFinishedFilter() {
    localStorage.setItem("finishedFilter", !appState.finishedFilter);
    appDispatch({ type: "TOGGLE_FINISHED_FILTER" });
  }
  function toggleAlphabeticalFilter() {
    localStorage.setItem("alphabeticalFilter", !appState.alphabeticalFilter);
    appDispatch({ type: "TOGGLE_ALPHABETICAL_FILTER" });
  }

  return (
    <div className="search">
      <SearchField />
      <div className="search__filter-wrap">
        <Checkbox
          field="finished"
          label="Hide already read"
          checked={appState.finishedFilter}
          onChange={toggleFinishedFilter}
        />
        <Checkbox
          field="alphabetical"
          label="あ → お"
          checked={appState.alphabeticalFilter}
          onChange={toggleAlphabeticalFilter}
        />
      </div>
    </div>
  );
}

export default HomeFilter;
