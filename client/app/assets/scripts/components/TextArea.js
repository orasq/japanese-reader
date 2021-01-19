import React from "react";

function TextArea(props) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={props.field}>
        {props.label}
      </label>
      <textarea
        id={props.field}
        type="text"
        className="form__text-area"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextArea;
