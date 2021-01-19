import React, { useContext } from "react";

// context import
import StateContext from "../contexts/StateContext";
import DispatchContext from "../contexts/DispatchContext";

function Checkbox(props) {
  // contexts
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  return (
    <div className="search__checkbox-group">
      <input id={props.field} type="checkbox" checked={props.checked} onChange={props.onChange} />
      <label htmlFor={props.field}>{props.label}</label>
    </div>
  );
}

export default Checkbox;
