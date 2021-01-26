import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import ReactMarkdown from "react-markdown";

// queries import
import { getBookQuery, addBookmarkMutation } from "../queries/queries";

// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";

// components import
import Page from "../components/Page";
import ReaderTools from "../components/ReaderTools";
import LoadingIcon from "../components/LoadingIcon";
import Bookmark from "../components/Bookmark";
import ScrollToTop from "../components/ScrollToTop";

function Reader() {
  // url parameters
  const { bookId } = useParams();

  // states
  const [bookmarkIndex, setBookmarkIndex] = useState(0);
  const [bookmarkRequest, setBookmarkRequest] = useState(0);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  // contexts
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  // queries
  const { loading, data } = useQuery(getBookQuery, {
    variables: { id: bookId }
  });

  // mutations
  const [addBookmark, { data: bookmarkData }] = useMutation(addBookmarkMutation);

  // functions
  function ToggleFont() {
    appDispatch({ type: "TOGGLE_FONT_SIZE" });
  }

  // function passed to <Bookmark/> component
  function handleBookmarkClick(paragraphIndex) {
    // if bookmark clicked is current active-bookmark, remove it
    if (paragraphIndex == bookmarkIndex) {
      setBookmarkIndex(0);
    } else {
      setBookmarkIndex(paragraphIndex);
    }
    setBookmarkRequest(bookmarkRequest + 1);
  }

  // Create custom paragraphs component and modify renderer property of Markdown component
  function CustomParagraph(props) {
    return (
      <>
        <p>
          <Bookmark
            bookmarkIndex={bookmarkIndex}
            handleBookmarkClick={handleBookmarkClick}
            index={props.index + 1}
          />
          {props.children}
        </p>
      </>
    );
  }
  const renderers = {
    paragraph: props => <CustomParagraph {...props} />
  };

  // make graphql query to save bookmark
  useEffect(() => {
    if (bookmarkRequest > 0) {
      async function addBookmarkRequest() {
        try {
          const response = await addBookmark({
            variables: {
              id: bookId,
              bookmarkIndex: bookmarkIndex
            }
          });
          // dispatch message
          if (bookmarkIndex > 0) {
            appDispatch({
              type: "ADD_FLOATING_MESSAGE",
              value: "Bookmark successfully saved"
            });
          }
        } catch (error) {
          console.log(error);
        }
      }
      addBookmarkRequest();
    }
  }, [bookmarkRequest]);

  // get font size
  useEffect(() => {
    localStorage.setItem("fontSize", appState.fontSize);
  }, [appState.fontSize]);

  // scroll to bookmark
  useEffect(() => {
    if (data) {
      setBookmarkIndex(data.book.bookmarkIndex);
      setDataIsLoaded(true);
    }
  }, [loading]);

  // scroll to bookmark
  useEffect(() => {
    if (dataIsLoaded && bookmarkIndex > 0) {
      // may not be the optimal way to do this (use 'ref' instead?)
      const activeBookmark = document.querySelector(".bookmark--active");
      const bookmarkPositionY = activeBookmark.getBoundingClientRect().y;
      window.scrollTo(0, bookmarkPositionY - 20);
    } else {
      window.scrollTo(0, 0);
    }
  }, [dataIsLoaded]);

  return (
    <Page>
      {loading ? (
        <LoadingIcon />
      ) : (
        <>
          <ScrollToTop />
          <ReaderTools bookId={bookId} toggleFont={ToggleFont} finished={data.book.finished} />
          <div className={`reader ${appState.fontSize == "big" ? "reader--font-big" : ""}`}>
            <h1 className="reader__title">{data.book.title}</h1>
            <div className="reader__content">
              <ReactMarkdown
                source={data.book.text}
                allowTypes={["paragraph"]}
                renderers={renderers}
                includeNodeIndex={true}
              />
            </div>
          </div>
        </>
      )}
    </Page>
  );
}

export default Reader;
