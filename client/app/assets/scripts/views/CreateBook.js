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
// queries import
import { getAllBooksQuery, createBookMutation } from "../queries/queries";
// components import
import Page from "../components/Page";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";

function CreateBook(props) {
  // contexts
  const appDispatch = useContext(DispatchContext);
  // state
  const [title, setTitle] = useState();
  const [cover, setCover] = useState();
  const [text, setText] = useState();

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
      const response = await props.createBookMutation({
        variables: {
          title: title,
          cover: cover,
          text: text,
          finished: false
        },
        refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
      });
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

  return (
    <Page narrow>
      <h1 className="text-center">Create a new book</h1>
      <form onSubmit={handleSubmit} className="form">
        <InputField
          autofocus
          field="title"
          type="text"
          label="Title"
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter title of the book ..."
        />
        <InputField field="imageupload" type="file" label="Cover" onChange={imageConvertion} />
        <TextArea
          field="txtcontent"
          type="text"
          label="Text"
          onChange={e => setText(e.target.value)}
        />
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
