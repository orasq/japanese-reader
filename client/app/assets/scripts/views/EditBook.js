////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { FaPlusCircle, FaTrash } from "react-icons/fa";

// context import
import DispatchContext from "../contexts/DispatchContext";

// queries import
import { getBookQuery, createBookMutation } from "../queries/queries";

// components import
import Page from "../components/Page";

function CreateBook(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState();
  const [cover, setCover] = useState();
  const [text, setText] = useState();
  console.log(cover);

  const AppDispatch = useContext(DispatchContext);

  // delete image
  function deleteImage() {}

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
        }
      });
      props.history.push(`/book/${response.data.createBook.id}`);
      // dispatch floating message
      AppDispatch({
        type: "ADD_FLOATING_MESSAGE",
        value: "This book has been successfully edited"
      });
    } catch {
      console.log("error");
    }
  }

  useEffect(() => {
    if (!props.data.loading) {
      setTitle(props.data.getBook.title);
      setCover(props.data.getBook.cover);
      setText(props.data.getBook.text);
      setIsLoading(false);
    }
  }, [props.data.loading]);

  return (
    <Page narrow>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <h1 className="text-center">Edit this book</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="form__group">
              <label className="form__label" htmlFor="title">
                Book's title
              </label>
              <input
                autoFocus
                value={title}
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
              {cover ? (
                <div className="form__cover-wrap">
                  <button onClick={() => setCover("")} className="form__cover-delete">
                    <FaTrash /> Delete
                  </button>
                  <div className="form__cover">
                    <img src={`data:image/png;base64,${cover}`} alt={title} nopin="nopin" />
                  </div>
                </div>
              ) : (
                <input
                  onChange={handleChange}
                  id="imageupload"
                  name="imageupload"
                  type="file"
                  accept=".jpg, .jpeg, .png"
                />
              )}
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="txtcontent">
                Text *
              </label>
              <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                id="txtcontent"
                type="text"
                className="form__text-area"
              />
            </div>
            <div className="button__group-row">
              <button className="button">
                <FaPlusCircle className="button__icon" /> Create new book
              </button>
              <button className="button button--delete">
                <FaTrash className="button__icon" /> Delete this book
              </button>
            </div>
          </form>
        </>
      )}
    </Page>
  );
}

export default compose(
  withRouter,
  graphql(getBookQuery, {
    options: props => {
      return {
        variables: {
          id: props.match.params.bookId
        }
      };
    }
  }),
  graphql(createBookMutation, { name: "createBookMutation" })
)(CreateBook);
