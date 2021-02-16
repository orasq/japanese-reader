import React from "react";

function Checkbox(props) {
  return (
    <div className="search__checkbox-group">
      <input
        id={props.field}
        type="checkbox"
        checked={props.checked}
        aria-checked={props.checked}
        onChange={props.onChange}
      />
      <label htmlFor={props.field}>{props.label}</label>
    </div>
  );
}

export default Checkbox;
