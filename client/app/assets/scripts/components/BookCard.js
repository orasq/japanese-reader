import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function BookCard(props) {
  // excerpt function
  function titleExcerpt() {
    const title = props.book.title;
    const charLimit = 30;

    if (title.length > charLimit) {
      return title.substring(0, charLimit).concat("...");
    }
    return title;
  }

  return (
    <Link
      to={`/book/${props.book.id}`}
      className={`bookcard ${props.book.finished ? "bookcard__finished" : ""}`}
    >
      {props.book.finished && (
        <div className="bookcard__finished-icon-wrap">
          <FaCheckCircle className="bookcard__finished-icon" />
        </div>
      )}
      <div className="bookcard__content">
        <div className="bookcard__cover">
          <img src={props.book.cover} alt={props.book.title} nopin="nopin" />
        </div>
        <h3 className="bookcard__title">{titleExcerpt()}</h3>
      </div>
    </Link>
  );
}

export default BookCard;
