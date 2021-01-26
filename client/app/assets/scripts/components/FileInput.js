import React from "react";
import { FaTrash } from "react-icons/fa";

// components import
import FormError from "./FormError";

function FileInput(props) {
  return (
    <div className={`form__group ${props.value ? "image-upload--filled" : ""}`}>
      {props.errorMessage && <FormError errorMessage={props.errorMessage} />}
      {/* Input is put before label, because it is hided and allow to select label on focus */}
      {props.value.length < 1 && (
        <input
          id={props.field}
          type="file"
          accept={props.type === "file" ? ".jpg, .jpeg, .png" : ""}
          className="image-upload__input"
          value={props.value}
          onChange={props.onChange}
        />
      )}
      <label
        className={`form__label image-upload__label ${props.value ? "image-upload__label-mb" : ""}`}
        htmlFor={props.field}
      >
        {props.label}
      </label>
      {/* if image file is in state, display it */}
      {props.value && (
        <div className="image-upload__cover-wrap">
          <button onClick={props.removeImage} className="image-upload__cover-delete">
            <FaTrash /> Delete
          </button>
          <div className="image-upload__cover">
            <img src={`data:image/png;base64,${props.value}`} alt={props.bookTitle} nopin="nopin" />
          </div>
        </div>
      )}
    </div>
  );
}

export default FileInput;
