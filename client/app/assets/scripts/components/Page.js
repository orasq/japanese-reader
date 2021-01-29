import React, { useEffect } from "react";

// components import
import Wrapper from "./Wrapper";

function Page(props) {
  //effects
  useEffect(() => {
    document.title = `${props.title} | Japanese Reader`;
    // scroll back to top when loading a new page
    window.scrollTo(0, 0);
  }, [props.title]);

  return <Wrapper narrow={props.narrow}>{props.children}</Wrapper>;
}

export default Page;
