import React, { useEffect, useState, useRef } from "react";
import { FaCheckCircle, FaFont, FaCog } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

function ReaderTools(props) {
  const tools = useRef(null);
  // states
  const [toolsOpened, setToolsOpened] = useState(false);

  // functions
  function ToggleTools() {
    setToolsOpened(!toolsOpened);
  }

  function CloseTools() {
    setToolsOpened(false);
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
        <RiEdit2Fill className="reader-tools__icons" />
        <FaCheckCircle className="reader-tools__icons" />
        <FaFont onClick={props.toggleFont} className="reader-tools__icons" />
      </div>
      <FaCog onClick={ToggleTools} className="reader-tools__cog" />
    </div>
  );
}

export default ReaderTools;
