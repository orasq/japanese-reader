////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { FaPlusCircle } from "react-icons/fa";

// queries import
import { getAllAuthorsQuery, createBookMutation } from "../queries/queries";

// components import
import Page from "../components/Page";
import { reduceRight } from "lodash";

function CreateBook(props) {
  const [title, setTitle] = useState();
  const [cover, setCover] = useState();
  const [text, setText] = useState();

  // convert file to base64 for basic image upload
  function handleChange(e) {
    let image = e.target.files[0];
    if (image) {
      const reader = new FileReader();
      reader.onload = handleReaderLoaded;
      reader.readAsBinaryString(image);
    }
  }
  // convert file to base64 for basic image upload
  function handleReaderLoaded(readerEvent) {
    let binaryString = readerEvent.target.result;
    setCover(btoa(binaryString));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await props.createBookMutation({
      variables: {
        title: title,
        cover: cover,
        text: text
      }
    });

    console.log(await response);
    props.history.push(`/book/${response.data.createBook.id}`);
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
            onChange={handleChange}
            id="imageupload"
            name="imageupload"
            type="file"
            accept=".jpg, .jpeg, .png"
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
  withRouter,
  graphql(getAllAuthorsQuery, { name: "getAllAuthorsQuery" }),
  graphql(createBookMutation, { name: "createBookMutation" })
)(CreateBook);
