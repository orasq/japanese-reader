import React, { useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";

// components import
import Page from "../components/Page";

function CreateBook() {
  return (
    <Page narrow>
      <h1 class="text-center">Create a new book</h1>
      <form class="form">
        <div className="form__group">
          <label className="form__label" htmlFor="japtitle">
            Japanese title *
          </label>
          <input
            id="japtitle"
            type="text"
            className="form__text-input"
            placeholder="Enter title of the book ..."
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="engtitle">
            English Title *
          </label>
          <input
            id="engtitle"
            type="text"
            className="form__text-input"
            placeholder="Enter title of the book ..."
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="imageupload">
            Book's Cover
          </label>
          <input id="imageupload" type="file" className="form__" />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="txtcontent">
            Text *
          </label>
          <textarea id="txtcontent" type="text" className="form__text-area" />
        </div>
        <button className="button" disabled>
          <FaPlusCircle className="button__icon" /> Create new book
        </button>
      </form>
    </Page>
  );
}

export default CreateBook;
