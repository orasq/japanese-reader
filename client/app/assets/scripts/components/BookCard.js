import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";

function BookCard(props) {
  function titleExcerpt() {
    const title = props.book.title;
    const charLimit = 30;

    if (title.length > charLimit) {
      return title.substring(0, charLimit).concat("...");
    }

    return title;
  }

  return (
    <Link to="/book/er" className={`bookcard ${props.read ? "bookcard__finished" : ""}`}>
      {props.read && <FaCheckCircle className="bookcard__finished-icon" />}
      <div className="bookcard__content">
        <div className="bookcard__cover">
          <img src="/assets/images/book-cover.jpg" alt="book cover" nopin="nopin" />
        </div>
        <h3 className="bookcard__title">{titleExcerpt()}</h3>
      </div>
    </Link>
  );
}

export default BookCard;
