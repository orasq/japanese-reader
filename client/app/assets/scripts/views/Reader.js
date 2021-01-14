import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";

// queries import
import { getBookQuery } from "../queries/queries";

// components import
import Page from "../components/Page";
import ReaderTools from "../components/ReaderTools";

function Reader(props) {
  // states
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize"));

  // functions
  function ToggleFont() {
    fontSize !== "big" ? setFontSize("big") : setFontSize("small");
  }

  // effects
  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  useEffect(() => {
    if (!props.data.loading) {
      setBook(props.data.getBook);
      setIsLoading(false);
    }
  }, [props.data.loading]);

  return (
    <Page>
      <ReaderTools toggleFont={ToggleFont} />
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div className={`reader ${fontSize == "big" ? "reader--font-big" : ""}`}>
          <h1 className="reader__title">{book.title}</h1>
          <div className="reader__content">{book.text}</div>
        </div>
      )}
    </Page>
  );
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.match.params.bookId
      }
    };
  }
})(Reader);
