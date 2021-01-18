import React, { useEffect, useState, useContext } from "react";
// import { useQuery } from "apollo-boost";
import { graphql, useQuery } from "react-apollo";

// queries import
import { getAllBooksQuery } from "../queries/queries";
// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";
// components import
import BookCard from "../components/BookCard";

function BookList(props) {
  // context
  const AppState = useContext(StateContext);
  const AppDispatch = useContext(DispatchContext);
  // states
  const [books, setBooks] = useState(AppState.books);
  const [isLoading, setIsLoading] = useState(true);
  // queries
  // const { loading, error, data } = useQuery(getAllBooksQuery);

  // effects
  useEffect(() => {
    console.log("run");
    if (props.data.loading) {
      setIsLoading(true);
    } else {
      AppDispatch({ type: "LOAD_BOOKS", value: props.data.getAllBooks });
      setIsLoading(false);
    }
  }, [props.data.loading]);

  return (
    <div className="bookcard__wrap">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        AppState.books.map(book => {
          return <BookCard key={book.id} book={book} />;
        })
      )}
    </div>
  );
}

export default graphql(getAllBooksQuery)(BookList);
