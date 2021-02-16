////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
// import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useState, useEffect, useContext } from "react";
import { withRouter, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { useImmerReducer } from "use-immer";
import Resizer from "react-image-file-resizer";
import { CSSTransition } from "react-transition-group";
// icons
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";

// context import
import DispatchContext from "../contexts/DispatchContext";

// form validation context, state & reducer import
import EditFormState from "../states/EditFormState";
import FormValidationReducer from "../reducers/FormValidationReducer";

// queries import
import { getBookQuery, deleteBookMutation, editBookMutation } from "../queries/queries";

// components import
import Page from "../components/Page";
import TextInput from "../components/TextInput";
import FileInput from "../components/FileInput";
import TextArea from "../components/TextArea";
import LoadingIcon from "../components/LoadingIcon";
import ConfirmModal from "../components/ConfirmModal";
import NotFound from "../components/NotFound";

function CreateBook(props) {
  // url parameters
  const { bookId } = useParams();

  // states
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // context
  const appDispatch = useContext(DispatchContext);

  // reducers
  const [state, dispatch] = useImmerReducer(FormValidationReducer, EditFormState);

  // queries
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: {
      id: bookId
    }
  });
  // mutations
  const [deleteBookMut, { data: deleteBookMutData }] = useMutation(deleteBookMutation);
  const [editBookMut] = useMutation(editBookMutation);

  // delete modal display handlers
  function handleShowModalDisplay() {
    setShowDeleteModal(true);
  }
  function handleHideModalDisplay() {
    setShowDeleteModal(false);
  }

  // delete book handler
  function handleDelete() {
    dispatch({ type: "DELETE_REQUEST" });
  }

  // image upload handler
  async function handleImage(e) {
    let file = e.target.files[0];
    if (file) {
      try {
        // image file resizer/compressor
        Resizer.imageFileResizer(
          file,
          280,
          600,
          "JPEG",
          80,
          0,
          uri => {
            console.log(uri);
            dispatch({ type: "COVER_CHANGE", value: uri });
          },
          "base64",
          140,
          300
        );
      } catch (err) {
        console.log(err);
      }
    }
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
            },
            // when mutation is complete, update Apollo cache
            // to reflect mutation on homepage without refetch
            update(cache, { data: { deleteBook } }) {
              cache.modify({
                fields: {
                  allBooks(existingBooks, { readField }) {
                    return existingBooks.filter(book => deleteBook.id !== readField("id", book));
                  }
                }
              });
            }
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
    if (data) {
      dispatch({
        type: "FETCH_FINISHED",
        value: {
          bookId: data.book.id,
          title: data.book.title,
          cover: data.book.cover,
          text: data.book.text
        }
      });
    }
  }, [loading]);

  // 404 not found
  if (!loading && !data) {
    return <NotFound />;
  }

  return (
    <Page title="Edit Book" narrow>
      {loading ? (
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
            {/* Delete + modal group */}
            <div className="button__delete-group">
              <button onClick={handleShowModalDisplay} className="button button--delete">
                <FaTrash className="button__icon" /> Delete this book
              </button>
              <CSSTransition
                classNames="confirm-modal"
                in={showDeleteModal}
                timeout={200}
                unmountOnExit
              >
                <ConfirmModal
                  handleDelete={handleDelete}
                  handleHideModalDisplay={handleHideModalDisplay}
                />
              </CSSTransition>
            </div>
          </div>
        </>
      )}
    </Page>
  );
}

export default withRouter(CreateBook);
