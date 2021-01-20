import React, { useState, useContext, useEffect } from "react";

// contexts import
import StateContext from "../contexts/StateContext";
// components import
import BookCard from "../components/BookCard";

function BookList(props) {
  // contexts
  const appState = useContext(StateContext);

  return (
    <div className="bookcard__wrap">
      {props.data.map(book => {
        return <BookCard key={book.id} book={book} />;
      })}
    </div>
  );
}

export default BookList;
