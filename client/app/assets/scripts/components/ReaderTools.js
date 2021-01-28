////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
// import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useState, useRef, useContext } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import { FaCheckCircle, FaBookmark, FaFont, FaCog } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

// queries import
import { finishedBookMutation } from "../queries/queries";

// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";

function ReaderTools(props) {
  const tools = useRef(null);

  // states
  const [toolsOpened, setToolsOpened] = useState(false);
  const [isFinished, setIsFinished] = useState(props.finished);

  // context
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  // mutations
  const [finishedBookMut, { data }] = useMutation(finishedBookMutation);
  // functions
  function ToggleTools() {
    setToolsOpened(!toolsOpened);
  }

  function CloseTools() {
    setToolsOpened(false);
  }

  async function markAsFinished() {
    try {
      const response = await finishedBookMut({
        variables: {
          id: props.bookId,
          finished: !isFinished
        }
      });
      // change state
      setIsFinished(!isFinished);
      // dispatch message
      if (!isFinished === true) {
        appDispatch({
          type: "ADD_FLOATING_MESSAGE",
          value: "This is book is now marked as read"
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // check if clicked element is tool-box
  // if not, close the dropdown
  function checkClickOutside(e) {
    if (e.target !== tools.current && !tools.current.contains(e.target)) {
      CloseTools();
    }
  }

  // effects
  useEffect(() => {
    if (toolsOpened) {
      document.addEventListener("click", checkClickOutside);
    } else {
      document.removeEventListener("click", checkClickOutside);
    }
    // cleanup when unmount
    return () => {
      document.removeEventListener("click", checkClickOutside);
    };
  }, [toolsOpened]);

  return (
    <div ref={tools} className={`reader-tools ${toolsOpened ? "reader-tools--open" : ""}`}>
      <div className="reader-tools__wrap">
        <Link to={`/book/${props.bookId}/edit`} data-tip="Edit this book" data-for="edit">
          <RiEdit2Fill className="reader-tools__icons" />
        </Link>
        <ReactTooltip
          id="edit"
          effect="solid"
          place="left"
          offset={{ left: -5 }}
          className="tooltip"
        />
        <FaBookmark
          onClick={() => appDispatch({ type: "TOGGLE_BOOKMARK_VISIBILITY" })}
          className={`reader-tools__icons ${
            !appState.bookmarkVisible ? "reader-tools__icons--inactive" : ""
          }`}
          data-tip={appState.bookmarkVisible ? "Hide bookmarks" : "Display bookmarks"}
          data-for="bookmark"
        />
        <ReactTooltip
          id="bookmark"
          effect="solid"
          place="left"
          offset={{ left: -5 }}
          className="tooltip"
        />
        <FaCheckCircle
          onClick={markAsFinished}
          className={`reader-tools__icons ${!isFinished ? "reader-tools__icons--inactive" : ""}`}
          data-tip={isFinished ? "Mark as unread" : "Mark as read"}
          data-for="finished"
        />
        <ReactTooltip
          id="finished"
          effect="solid"
          place="left"
          offset={{ left: -5 }}
          className="tooltip"
        />
        <FaFont
          onClick={props.toggleFont}
          className={`reader-tools__icons ${
            appState.fontSize !== "big" ? "reader-tools__icons--inactive" : ""
          }`}
          data-tip={appState.fontSize === "big" ? "Decrease font size" : "Increase font size"}
          data-for="font"
        />
        <ReactTooltip
          id="font"
          effect="solid"
          place="left"
          offset={{ left: -5 }}
          className="tooltip"
        />
      </div>
      <FaCog onClick={ToggleTools} className="reader-tools__cog" />
    </div>
  );
}

export default ReaderTools;
