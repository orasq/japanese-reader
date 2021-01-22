import React from "react";

function TextInput(props) {
  return (
    <div className="form__group">
      <label className="form__label" htmlFor={props.field}>
        {props.label}
      </label>
      <input
        autoFocus={props.autofocus}
        id={props.field}
        type="text"
        className="form__text-input"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextInput;
