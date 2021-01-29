////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
// import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useState, useRef, useContext } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import ReactTooltip from "react-tooltip";
import { FaCheckCircle, FaBookmark, FaFont, FaCog } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

// queries import
import { finishedBookMutation } from "../queries/queries";

// contexts import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";

function ReaderTools(props) {
  const toolbox = useRef(null);

  // states
  const [toolsOpened, setToolsOpened] = useState(false);
  const [isFinished, setIsFinished] = useState(props.finished);
  const [finishRequest, setFinishRequest] = useState(0);

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

  // check if clicked element is toolbox
  // if not, close the dropdown
  function checkClickOutside(e) {
    // if click inside
    if (toolbox.current.contains(e.target)) {
      return;
    } else {
      // if click outside
      CloseTools();
    }
  }

  // effects
  useEffect(() => {
    if (toolsOpened) {
      document.addEventListener("mousedown", checkClickOutside);
    } else {
      document.removeEventListener("mousedown", checkClickOutside);
    }
    // cleanup when unmount
    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  }, [toolsOpened]);

  // mark as finished request
  useEffect(() => {
    if (finishRequest) {
      async function markAsFinished() {
        try {
          const response = await finishedBookMut({
            variables: {
              id: props.bookId,
              finished: !isFinished
            }
          });
          // dispatch message
          if (!isFinished === true) {
            appDispatch({
              type: "ADD_FLOATING_MESSAGE",
              value: "This is book is now marked as read"
            });
          }
          // change states
          setIsFinished(!isFinished);
          setFinishRequest(0);
        } catch (error) {
          console.log(error);
        }
      }
      markAsFinished();
    }
  }, [finishRequest]);

  return (
    <div ref={toolbox} className={`reader-tools ${toolsOpened ? "reader-tools--open" : ""}`}>
      {/* group of icons */}
      <CSSTransition classNames="reader-tools__wrap" in={toolsOpened} timeout={500} unmountOnExit>
        <div className="reader-tools__wrap">
          <div className="reader-tools__icon-group">
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
          </div>
          <div className="reader-tools__icon-group">
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
          </div>
          <div className="reader-tools__icon-group">
            <FaCheckCircle
              onClick={() => setFinishRequest(finishRequest + 1)}
              className={`reader-tools__icons ${
                !isFinished ? "reader-tools__icons--inactive" : ""
              }`}
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
          </div>
          <div className="reader-tools__icon-group">
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
        </div>
      </CSSTransition>
      {/* settings icons */}
      <FaCog onClick={ToggleTools} className="reader-tools__cog" />
    </div>
  );
}

export default ReaderTools;
