import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-apollo";
import ReactMarkdown from "react-markdown";

// queries import
import { getBookQuery } from "../queries/queries";
// components import
import Page from "../components/Page";
import ReaderTools from "../components/ReaderTools";

function Reader() {
  // states
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize"));
  const { bookId } = useParams();
  const { loading, error, data } = useQuery(getBookQuery, { variables: { id: bookId } });

  // functions
  function ToggleFont() {
    fontSize !== "big" ? setFontSize("big") : setFontSize("small");
  }

  // effects
  useEffect(() => {
    localStorage.setItem("fontSize", fontSize);
  }, [fontSize]);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <Page>
      <ReaderTools bookId={bookId} toggleFont={ToggleFont} finished={data.book.finished} />
      {
        <div className={`reader ${fontSize == "big" ? "reader--font-big" : ""}`}>
          <h1 className="reader__title">{data.book.title}</h1>
          <div className="reader__content">
            <ReactMarkdown source={data.book.text} allowTypes={["paragraph"]} />
          </div>
        </div>
      }
    </Page>
  );
}

export default Reader;

// export default graphql(getBookQuery, {
//   options: props => {
//     return {
//       variables: {
//         id: props.match.params.bookId
//       }
//     };
//   }
// })(Reader);
