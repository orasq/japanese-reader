////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
// import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useState, useContext } from "react";
import { withRouter, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
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
  const { bookId: id } = useParams();
  // context
  const appDispatch = useContext(DispatchContext);
  // state
  const [bookId, setBookId] = useState("");
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [text, setText] = useState("");
  // queries
  const { loading: getBookLoading, error: getBookError, data: getBookData } = useQuery(
    getBookQuery,
    {
      variables: {
        id: id
      }
    }
  );
  const { loading: getAllBooksLoading, error: getAllBooksError, data: getAllBooksData } = useQuery(
    getAllBooksQuery
  );
  // mutations
  const [deleteBookMut, { data }] = useMutation(deleteBookMutation);
  const [editBookMut] = useMutation(editBookMutation);

  // delete book
  async function deleteBook() {
    try {
      const response = await deleteBookMut({
        variables: {
          id: bookId
        },
        refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
      });
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
      const response = await editBookMut({
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
    if (!getBookLoading) {
      setBookId(getBookData.book.id);
      setTitle(getBookData.book.title);
      setCover(getBookData.book.cover);
      setText(getBookData.book.text);
    }
  }, [getBookLoading]);

  return (
    <Page narrow>
      {getBookLoading ? (
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

export default withRouter(CreateBook);
