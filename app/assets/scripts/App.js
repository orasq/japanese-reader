/* loading CSS in Javascript to automatically inject new css
in browser's memory without having to refresh the browser.
Development performance and practical benefits */
import "../styles/styles.css";

/* lazy loading for images.
Add "lazyload" class to <img> tags, and change 'srcset' to 'data-srcset'*/
import "lazysizes";

// Function import
import FunctionBase from "./modules/FunctionBase";
FunctionBase();

// Class import
import ClassBase from "./modules/ClassBase";
new ClassBase(/*arg1, arg2*/);
new ClassBase(/*arg1, arg2*/);

// React
import React from "react";
import ReactDOM from "react-dom";

function Component() {
  return (
    <>
      <h2>Hey!</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique perferendis, explicabo
        praesentium magnam illum voluptate fuga maiores quas blanditiis qui odit nulla dolore.
      </p>
    </>
  );
}

ReactDOM.render(<Component />, document.querySelector("#app"));

/* allows webpack's hot modules replacements */
if (module.hot) {
  module.hot.accept();
}
