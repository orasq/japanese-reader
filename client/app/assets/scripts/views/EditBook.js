////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { graphql } from "react-apollo";
import * as compose from "lodash.flowright";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

// context import
import DispatchContext from "../contexts/DispatchContext";

// queries import
import {
  getBookQuery,
  getAllBooksQuery,
  deleteBookMutation,
  editBookMutation
} from "../queries/queries";

// components import
import Page from "../components/Page";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import LoadingIcon from "../components/LoadingIcon";

function CreateBook(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [bookId, setBookId] = useState();
  const [title, setTitle] = useState();
  const [cover, setCover] = useState();
  const [text, setText] = useState();

  const appDispatch = useContext(DispatchContext);

  // delete book
  async function deleteBook(e) {
    e.preventDefault();
    try {
      const response = await props.deleteBookMutation({
        variables: {
          id: bookId
        },
        refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
      });
      console.log(response.data.deleteBook.id);
      // redirect to homepage
      props.history.push("/");
      // dispatch floating message
      appDispatch({
        type: "ADD_FLOATING_MESSAGE",
        value: "This book has been successfully deleted"
      });
    } catch (error) {
      console.log(error);
    }
  }

  // convert file to base64 for basic image upload
  function imageConvertion(e) {
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
      const response = await props.editBookMutation({
        variables: {
          id: bookId,
          title: title,
          cover: cover,
          text: text
        },
        refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
      });
      props.history.push(`/book/${bookId}`);
      // dispatch floating message
      appDispatch({
        type: "ADD_FLOATING_MESSAGE",
        value: "This book has been successfully edited"
      });
    } catch (error) {
      console.log(error);
    }
  }

  // on page load
  useEffect(() => {
    if (!props.data.loading) {
      setBookId(props.data.book.id);
      setTitle(props.data.book.title);
      setCover(props.data.book.cover);
      setText(props.data.book.text);
      setIsLoading(false);
    }
  }, [props.data.loading]);

  return (
    <Page narrow>
      {isLoading ? (
        <LoadingIcon />
      ) : (
        <>
          <h1 className="text-center">Edit this book</h1>
          <form onSubmit={handleSubmit} className="form">
            <InputField
              autofocus
              field="title"
              type="text"
              label="Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Enter title of the book ..."
            />
            <InputField
              field="imageupload"
              type="file"
              label="Cover"
              bookTitle={title}
              value={cover}
              onClick={() => setCover("")}
              onChange={imageConvertion}
            />
            <TextArea
              field="txtcontent"
              type="text"
              label="Text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            {/*<div className="form__group">
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
            </div> */}
          </form>
          <div className="button__group-row">
            <button onClick={handleSubmit} className="button">
              <RiEdit2Fill className="button__icon" /> Edit this book
            </button>
            <button onClick={deleteBook} className="button button--delete">
              <FaTrash className="button__icon" /> Delete this book
            </button>
          </div>
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
  graphql(editBookMutation, { name: "editBookMutation" }),
  graphql(getAllBooksQuery, { name: "getAllBooksQuery" }),
  graphql(deleteBookMutation, { name: "deleteBookMutation" })
)(CreateBook);
