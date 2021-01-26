////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
// import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useContext } from "react";
import { withRouter, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { useImmerReducer } from "use-immer";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";

// context import
import DispatchContext from "../contexts/DispatchContext";

// form validation context, state & reducer import
import EditFormState from "../states/EditFormState";
import FormValidationReducer from "../reducers/FormValidationReducer";

// queries import
import {
  getBookQuery,
  getAllBooksQuery,
  deleteBookMutation,
  editBookMutation
} from "../queries/queries";

// helpers import
import base64Convertion from "../helpers/base64Convertion";

// components import
import Page from "../components/Page";
import TextInput from "../components/TextInput";
import FileInput from "../components/FileInput";
import TextArea from "../components/TextArea";
import LoadingIcon from "../components/LoadingIcon";

function CreateBook(props) {
  // url parameters
  const { bookId } = useParams();

  // context
  const appDispatch = useContext(DispatchContext);

  // reducers
  const [state, dispatch] = useImmerReducer(FormValidationReducer, EditFormState);

  // queries
  const { loading: getBookLoading, error: getBookError, data: getBookData } = useQuery(
    getBookQuery,
    {
      variables: {
        id: bookId
      }
    }
  );
  // const { loading: getAllBooksLoading, error: getAllBooksError, data: getAllBooksData } = useQuery(
  //   getAllBooksQuery
  // );
  // mutations
  const [deleteBookMut, { data }] = useMutation(deleteBookMutation);
  const [editBookMut] = useMutation(editBookMutation);

  // delete book handler
  function handleDelete() {
    const confirmation = window.confirm("Are you sure you wnat to delete this book?");
    if (confirmation) {
      dispatch({ type: "DELETE_REQUEST" });
    }
  }

  // image upload handler
  async function handleImage(e) {
    // convert file to base64 for basic image upload
    const base64String = await base64Convertion(e);
    dispatch({ type: "COVER_CHANGE", value: base64String });
  }

  // form submit handler
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "CHECK_TITLE", value: state.title.value });
    dispatch({ type: "CHECK_COVER", value: state.cover.value });
    dispatch({ type: "CHECK_TEXT", value: state.text.value });
    dispatch({ type: "SUBMIT_REQUEST" });
  }

  // delete book request
  useEffect(() => {
    if (state.deleteRequestCount) {
      async function deleteBook() {
        try {
          const response = await deleteBookMut({
            variables: {
              id: state.bookId.value
            }
            // refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
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
      deleteBook();
    }
  }, [state.deleteRequestCount]);

  // edit book request
  useEffect(() => {
    if (state.saveRequestCount) {
      dispatch({ type: "SAVE_REQUEST_STARTED" });
      async function editBook() {
        try {
          const response = await editBookMut({
            variables: {
              id: state.bookId.value,
              title: state.title.value,
              cover: state.cover.value,
              text: state.text.value
            }
            // refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
          });
          dispatch({ type: "SAVE_REQUEST_FINISHED" });
          // redirect to book page
          props.history.push(`/book/${state.bookId.value}`);
          // dispatch floating message
          appDispatch({
            type: "ADD_FLOATING_MESSAGE",
            value: "This book has been successfully edited"
          });
        } catch (error) {
          console.log(error);
        }
      }
      editBook();
    }
  }, [state.saveRequestCount]);

  // on page load
  useEffect(() => {
    if (!getBookLoading) {
      dispatch({
        type: "FETCH_FINISHED",
        value: {
          bookId: getBookData.book.id,
          title: getBookData.book.title,
          cover: getBookData.book.cover,
          text: getBookData.book.text
        }
      });
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
            <TextInput
              autofocus
              field="title"
              type="text"
              label="Title"
              value={state.title.value}
              errorMessage={state.title.errorMessage}
              onBlur={e => dispatch({ type: "CHECK_TITLE", value: e.target.value })}
              onChange={e => dispatch({ type: "TITLE_CHANGE", value: e.target.value })}
              placeholder="Enter title of the book ..."
            />
            <FileInput
              field="imageupload"
              label="Cover"
              bookTitle={state.title.value}
              value={state.cover.value}
              errorMessage={state.cover.errorMessage}
              removeImage={e => dispatch({ type: "COVER_CHANGE", value: "" })}
              onChange={e => handleImage(e)}
            />

            <TextArea
              field="txtcontent"
              type="text"
              label="Text"
              value={state.text.value}
              errorMessage={state.text.errorMessage}
              onBlur={e => dispatch({ type: "CHECK_TEXT", value: e.target.value })}
              onChange={e => dispatch({ type: "TEXT_CHANGE", value: e.target.value })}
            />
          </form>
          <div className="button__group-row">
            <button
              onClick={handleSubmit}
              className="button"
              disabled={
                state.isSaving ||
                state.title.hasErrors ||
                state.cover.hasErrors ||
                state.text.hasErrors
              }
            >
              {state.isSaving ? (
                <CgSpinner className="button__icon button__loading-icon" />
              ) : (
                <RiEdit2Fill className="button__icon" />
              )}
              Edit this book
            </button>
            <button onClick={handleDelete} className="button button--delete">
              <FaTrash className="button__icon" /> Delete this book
            </button>
          </div>
        </>
      )}
    </Page>
  );
}

export default withRouter(CreateBook);
