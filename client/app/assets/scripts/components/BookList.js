import React from "react";
import { useQuery } from "react-apollo";

// queries import
import { getAllBooksQuery } from "../queries/queries";
// components import
import BookCard from "../components/BookCard";

function BookList() {
  // queries
  const { loading, error, data } = useQuery(getAllBooksQuery);

  if (loading) return <p>Loading ...</p>;

  return (
    <div className="bookcard__wrap">
      {data.allBooks.map(book => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}

export default BookList;
