import React, { useEffect, useState } from "react";
import { FaBookmark, FaFont, FaCog } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";

function ReaderTools(props) {
  // states
  const [toolsOpened, setToolsOpened] = useState(false);

  // functions
  function ToggleTools() {
    setToolsOpened(!toolsOpened);
  }

  return (
    <div className={`reader-tools ${toolsOpened ? "reader-tools--open" : ""}`}>
      <div className="reader-tools__wrap">
        <RiEdit2Fill className="reader-tools__icons" />
        <FaBookmark className="reader-tools__icons" />
        <FaFont onClick={props.toggleFont} className="reader-tools__icons" />
      </div>
      <FaCog onClick={ToggleTools} className="reader-tools__cog" />
    </div>
  );
}

export default ReaderTools;
