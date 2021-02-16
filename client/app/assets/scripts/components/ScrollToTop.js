import React, { useState, useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { throttle } from "lodash";

function ScrollToTop() {
  // states
  const [iconVisible, setIconVisible] = useState(false);

  //functions
  function showScrollIcon() {
    window.scrollY > 900 ? setIconVisible(true) : setIconVisible(false);
  }

  // effects
  useEffect(() => {
    // throttling event
    const throttledShowScroll = throttle(showScrollIcon, 200);
    window.addEventListener("scroll", throttledShowScroll);

    // cleanup when unmount
    return () => {
      window.removeEventListener("scroll", throttledShowScroll);
    };
  }, []);

  return (
    <>
      <button
        className={`scroll-to-top ${iconVisible ? "scroll-to-top--visible" : ""}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <BiArrowToTop />
      </button>
    </>
  );
}

export default ScrollToTop;
