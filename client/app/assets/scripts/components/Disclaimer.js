import React, { useState } from "react";

function Disclaimer() {
  // states
  const [hideDisclaimer, setHideDisclaimer] = useState(
    localStorage.getItem("hideDisclaimer") === "true"
  );

  function handleClick() {
    setHideDisclaimer(true);
    localStorage.setItem("hideDisclaimer", "true");
  }

  return (
    !hideDisclaimer && (
      <div className="disclaimer">
        <div className="disclaimer__txt">
          Hey! 👋 &nbsp; This <strong>demo version</strong> is not linked to my personnal database,
          so feel free to interact with it (create, edit, delete, ...).
        </div>
        <button onClick={handleClick} className="button">
          Got it!
        </button>
      </div>
    )
  );
}

export default Disclaimer;
