import React, { useEffect, useState } from "react";
import { graphql } from "react-apollo";

// queries import
import { getAllBooksQuery } from "../queries/queries";

// components import
import BookCard from "../components/BookCard";

function BookList(props) {
  // states
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // effects
  useEffect(() => {
    if (props.data.loading) {
      setIsLoading(true);
    } else {
      setBooks(props.data.getAllBooks);
      setIsLoading(false);
    }
  });

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

export default graphql(getAllBooksQuery)(BookList);
