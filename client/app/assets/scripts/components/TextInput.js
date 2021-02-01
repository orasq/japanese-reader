import React from "react";

// components import
import FormError from "./FormError";

function TextInput(props) {
  return (
    <div className={`form__group ${props.errorMessage ? "form__group--error" : ""}`}>
      {props.errorMessage && <FormError errorMessage={props.errorMessage} />}
      <label className="form__label" htmlFor={props.field}>
        {props.label}
      </label>
      <input
        id={props.field}
        type="text"
        className="form__text-input"
        autoFocus={props.autofocus}
        autoComplete="off"
        placeholder={props.placeholder}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextInput;
