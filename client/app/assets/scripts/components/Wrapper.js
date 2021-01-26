import React from "react";

function Wrapper(props) {
  return <div className={`wrapper ${props.narrow ? "wrapper--narrow" : ""}`}>{props.children}</div>;
}

export default Wrapper;
