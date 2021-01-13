import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";

// queries import
import { getBooksQuery } from "../queries/queries";

// components import
import BookCard from "../components/BookCard";

function BookList(props) {
  // states
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = props.data;

  // effects
  useEffect(() => {
    if (data.loading) {
      setIsLoading(true);
    } else {
      setBooks(data.getAllBooks);
      setIsLoading(false);
    }
  }, [data.loading]);

  return (
    <div className="bookcard__wrap">
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        books.map(book => {
          return <BookCard key={book.id} book={book} />;
        })
      )}
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
