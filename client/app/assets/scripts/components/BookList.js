import React from "react";

// components import
import BookCard from "../components/BookCard";

function BookList(props) {
  return (
    <div className="bookcard__wrap">
      {props.data.map(book => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}

export default BookList;
