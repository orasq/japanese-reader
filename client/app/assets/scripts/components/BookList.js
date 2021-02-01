import React from "react";
import { FiBookOpen } from "react-icons/fi";

// components import
import BookCard from "../components/BookCard";

function BookList(props) {
  return (
    <>
      {props.data.length === 0 ? (
        <div className="empty-booklist">
          <FiBookOpen className="empty-booklist__icon" />
          <div className="empty-booklist__title">Your booklist is empty</div>
          <p>Click on the top right button to create a new book</p>
        </div>
      ) : (
        <div className="bookcard__wrap">
          {props.data.map(book => {
            return <BookCard key={book.id} book={book} />;
          })}
        </div>
      )}
    </>
  );
}

export default BookList;
