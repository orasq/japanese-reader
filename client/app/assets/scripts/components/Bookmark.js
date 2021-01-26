import React, { useContext } from "react";
import { FaBookmark } from "react-icons/fa";

// contexts import
import StateContext from "../contexts/StateContext";

function Bookmark(props) {
  // contexts
  const appState = useContext(StateContext);

  return (
    <span
      className={`bookmark ${props.bookmarkIndex === props.index ? "bookmark--active" : ""} ${
        !appState.bookmarkVisible ? "bookmark--hidden" : ""
      }`}
      onClick={() => props.handleBookmarkClick(props.index)}
    >
      <FaBookmark />
    </span>
  );
}

export default Bookmark;
