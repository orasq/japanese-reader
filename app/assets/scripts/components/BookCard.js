import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaPlusCircle } from "react-icons/fa";

function BookCard(props) {
  return (
    <Link to="/book/er" className={`bookcard ${props.read ? "bookcard__finished" : ""}`}>
      {props.read && <FaCheckCircle className="bookcard__finished-icon" />}
      <div className="bookcard__content">
        <div className="bookcard__cover">
          <img src="/assets/images/book-cover.jpg" alt="book cover" nopin="nopin" />
        </div>
        <h3 className="bookcard__title">やがて君になる佐伯沙弥香について</h3>
      </div>
    </Link>
  );
}

export default BookCard;
