import { useQuery } from "@apollo/client";
import React, { useState, useContext, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { useMutation } from "@apollo/client";

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
      {props.index}
      <FaBookmark />
    </span>
  );
}

export default Bookmark;
