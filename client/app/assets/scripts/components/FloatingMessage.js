import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";

// import context
import StateContext from "../contexts/StateContext";

function FloatingMessage() {
  const appState = useContext(StateContext);
  return (
    <div className="floating-messages">
      {appState.floatingMessages.map((msg, index) => {
        return (
          <div key={index} className="floating-messages__msg">
            <FaCheckCircle />
            <span>{msg}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FloatingMessage;
