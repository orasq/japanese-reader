import React from "react";
import { FaTrash } from "react-icons/fa";

function InputField(props) {
  // functions
  function handleClasses(inputType) {
    if (inputType === "text") {
      return "form__text-input";
    } else if (inputType === "file") {
      return "form__file-input";
    }
  }

  return (
    <div className="form__group">
      <label className="form__label" htmlFor={props.field}>
        {props.label}
      </label>
      {props.type === "file" && props.value ? (
        <div className="form__cover-wrap">
          <button onClick={props.onClick} className="form__cover-delete">
            <FaTrash /> Delete
          </button>
          <div className="form__cover">
            <img src={`data:image/png;base64,${props.value}`} alt={props.bookTitle} nopin="nopin" />
          </div>
        </div>
      ) : (
        <input
          autoFocus={props.autofocus}
          id={props.field}
          type={props.type}
          className={handleClasses(props.type)}
          placeholder={props.placeholder}
          accept={props.type === "file" ? ".jpg, .jpeg, .png" : ""}
          value={props.value}
          onChange={props.onChange}
        />
      )}
    </div>
  );
}

export default InputField;
