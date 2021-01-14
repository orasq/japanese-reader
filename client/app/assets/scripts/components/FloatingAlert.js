import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

function FloatingAlert(props) {
  return (
    <div className="floating-alerts">
      {props.messages.map((msg, index) => {
        return (
          <div key={index} className="floating-alerts__message">
            <FaCheckCircle />
            <span>{msg}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FloatingAlert;
