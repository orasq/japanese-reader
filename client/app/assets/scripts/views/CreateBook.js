import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { FaPlusCircle } from "react-icons/fa";

// queries import
import { getAllAuthorsQuery, createBookMutation } from "../queries/queries";

// components import
import Page from "../components/Page";

function CreateBook(props) {
  const [title, setTitle] = useState();
  const [cover, setCover] = useState();
  const [text, setText] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    props.createBookMutation({
      variables: {
        title: title,
        cover: cover,
        text: text
      }
    });
  }

  return (
    <Page narrow>
      <h1 className="text-center">Create a new book</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form__group">
          <label className="form__label" htmlFor="title">
            Book's title
          </label>
          <input
            autoFocus
            onChange={e => setTitle(e.target.value)}
            id="title"
            type="text"
            className="form__text-input"
            placeholder="Enter title of the book ..."
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="imageupload">
            Book's Cover
          </label>
          <input
            onChange={e => setCover(e.target.value)}
            id="imageupload"
            type="file"
            className="form__"
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="txtcontent">
            Text *
          </label>
          <textarea
            onChange={e => setText(e.target.value)}
            id="txtcontent"
            type="text"
            className="form__text-area"
          />
        </div>
        <button className="button">
          <FaPlusCircle className="button__icon" /> Create new book
        </button>
      </form>
    </Page>
  );
}

export default compose(
  graphql(getAllAuthorsQuery, { name: "getAllAuthorsQuery" }),
  graphql(createBookMutation, { name: "createBookMutation" })
)(CreateBook);
