////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { FaPlusCircle } from "react-icons/fa";

// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";
// queries import
import { getAllBooksQuery, createBookMutation } from "../queries/queries";
// components import
import Page from "../components/Page";

function CreateBook(props) {
  // contexts
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);
  // state
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
    try {
      const response = await props.createBookMutation({
        variables: {
          title: title,
          cover: cover,
          text: text
        },
        refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
      });
      // edit state
      appDispatch({ type: "ADD_BOOK", value: { title, cover, text } });
      // redirect to book page
      props.history.push(`/book/${response.data.createBook.id}`);
      // dispatch floating message
      appDispatch({
        type: "ADD_FLOATING_MESSAGE",
        value: "A new book has been successfully created"
      });
    } catch {
      console.log("error");
    }
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
  graphql(getAllBooksQuery, { name: "getAllBooksQuery" }),
  graphql(createBookMutation, { name: "createBookMutation" })
)(CreateBook);
