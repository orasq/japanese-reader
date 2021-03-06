////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useImmerReducer } from "use-immer";
import Resizer from "react-image-file-resizer";
import * as compose from "lodash.flowright";
// icons
import { FaPlusCircle } from "react-icons/fa";
import { CgSpinner } from "react-icons/cg";

// app context import
import DispatchContext from "../contexts/DispatchContext";

// form validation context, state & reducer import
import CreateFormState from "../states/CreateFormState";
import FormValidationReducer from "../reducers/FormValidationReducer";

// queries import
import { createBookMutation } from "../queries/queries";

// components import
import Page from "../components/Page";
import TextInput from "../components/TextInput";
import FileInput from "../components/FileInput";
import TextArea from "../components/TextArea";

function CreateBook(props) {
  // contexts
  const appDispatch = useContext(DispatchContext);

  // reducers
  const [state, dispatch] = useImmerReducer(FormValidationReducer, CreateFormState);

  // mutations
  const [addBookMut, { data }] = useMutation(createBookMutation);

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
            dispatch({ type: "COVER_CHANGE", value: uri });
          },
          "base64",
          140,
          300
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  // form submit handler
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "CHECK_TITLE", value: state.title.value });
    dispatch({ type: "CHECK_COVER", value: state.cover.value });
    dispatch({ type: "CHECK_TEXT", value: state.text.value });
    dispatch({ type: "SUBMIT_REQUEST" });
  }
  // create Book request
  useEffect(() => {
    if (state.saveRequestCount) {
      dispatch({ type: "SAVE_REQUEST_STARTED" });
      async function createBook(e) {
        try {
          const response = await addBookMut({
            variables: {
              title: state.title.value,
              cover: state.cover.value,
              text: state.text.value
            },
            // when mutation is complete, update Apollo cache
            // to reflect mutation on homepage without refetch
            update(cache, { data: { createBook } }) {
              cache.modify({
                fields: {
                  allBooks(existingBooks = []) {
                    const newBookRef = cache.writeFragment({
                      data: createBook,
                      fragment: gql`
                        fragment newBook on book {
                          id
                          title
                          cover
                          text
                        }
                      `
                    });
                    return [newBookRef, ...existingBooks];
                  }
                }
              });
            }
          });
          dispatch({ type: "SAVE_REQUEST_FINISHED" });
          // redirect to book page
          props.history.push(`/book/${response.data.createBook.id}`);
          // dispatch floating message
          appDispatch({
            type: "ADD_FLOATING_MESSAGE",
            value: "A new book has been successfully created"
          });
        } catch (error) {
          console.log(error);
        }
      }
      createBook();
    }
  }, [state.saveRequestCount]);

  return (
    <Page title="Create New Book" narrow>
      <h1 className="text-center">Create a new book</h1>
      <form onSubmit={handleSubmit} className="form">
        <TextInput
          autofocus
          field="title"
          type="text"
          label="Title"
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
          errorMessage={state.text.errorMessage}
          onBlur={e => dispatch({ type: "CHECK_TEXT", value: e.target.value })}
          onChange={e => dispatch({ type: "TEXT_CHANGE", value: e.target.value })}
        />
        <button
          className="button"
          disabled={
            state.isSaving || state.title.hasErrors || state.cover.hasErrors || state.text.hasErrors
          }
        >
          {state.isSaving ? (
            <CgSpinner className="button__icon button__loading-icon" />
          ) : (
            <FaPlusCircle className="button__icon" />
          )}
          Create new book
        </button>
      </form>
    </Page>
  );
}

export default withRouter(CreateBook);
