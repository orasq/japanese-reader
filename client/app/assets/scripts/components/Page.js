import React, { useEffect } from "react";

// components import
import Wrapper from "./Wrapper";

function Page(props) {
  return <Wrapper narrow={props.narrow}>{props.children}</Wrapper>;
}

export default Page;
