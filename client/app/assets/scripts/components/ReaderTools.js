////////////////////////////////////////////////////////////
// Important !! Necessary to work with async/await and Babel
import regeneratorRuntime from "regenerator-runtime";
////////////////////////////////////////////////////////////
import React, { useEffect, useState, useRef, useContext } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaCheck, FaFont, FaCog } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

// queries import
import { finishedBookMutation, getAllBooksQuery } from "../queries/queries";
// context import
import DispatchContext from "../contexts/DispatchContext";

function ReaderTools(props) {
  const tools = useRef(null);
  // states
  const [toolsOpened, setToolsOpened] = useState(false);
  const [isFinished, setIsFinished] = useState(props.finished);
  // context
  const appDispatch = useContext(DispatchContext);
  // functions
  function ToggleTools() {
    setToolsOpened(!toolsOpened);
  }

  function CloseTools() {
    setToolsOpened(false);
  }

  async function markAsFinished() {
    try {
      const response = await props.finishedBookMutation({
        variables: {
          id: props.bookId,
          finished: !isFinished
        },
        refetchQueries: [{ query: getAllBooksQuery }] // allow the homepage to be up-to-date
      });
      // change state
      setIsFinished(!isFinished);
      // dispatch message
      if (!isFinished === true) {
        appDispatch({
          type: "ADD_FLOATING_MESSAGE",
          value: "This is book is now marked as 'finished'"
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // check if clicked element is tools box
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

    return () => {
      document.removeEventListener("click", checkClickOutside);
    };
  }, [toolsOpened]);

  return (
    <div ref={tools} className={`reader-tools ${toolsOpened ? "reader-tools--open" : ""}`}>
      <div className="reader-tools__wrap">
        <Link to={`/book/${props.bookId}/edit`}>
          <RiEdit2Fill className="reader-tools__icons" />
        </Link>
        <FaCheckCircle
          onClick={markAsFinished}
          className={`reader-tools__icons ${!isFinished ? "reader-tools__icons--inactive" : ""}`}
        />
        <FaFont onClick={props.toggleFont} className="reader-tools__icons" />
      </div>
      <FaCog onClick={ToggleTools} className="reader-tools__cog" />
    </div>
  );
}

export default graphql(finishedBookMutation, { name: "finishedBookMutation" })(ReaderTools);
