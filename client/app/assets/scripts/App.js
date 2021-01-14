/* loading CSS in Javascript to automatically inject new css
in browser's memory without having to refresh the browser.
Development performance and practical benefits */
import "../styles/styles.css";

/* lazy loading for images.
Add "lazyload" class to <img> tags, and change 'srcset' to 'data-srcset'*/
import "lazysizes";

// React
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Apollo setup to be able to use GraphQL queries
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

// views import
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingAlert from "./components/FloatingAlert";
import Home from "./views/Home";
import Reader from "./views/Reader";
import CreateBook from "./views/CreateBook";

function App() {
  const [flashMessages, setFlashMessages] = useState([]);

  function addFlashMessages(msg) {
    setFlashMessages(prev => prev.concat(msg));
  }
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <FloatingAlert messages={flashMessages} />
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          {/* To be eable to use "params" in graphql query */}
          <Route path="/book/:bookId" component={Reader} />
          <Route path="/create-book">
            <CreateBook addFlashMessages={addFlashMessages} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

/* allows webpack's hot modules replacements */
if (module.hot) {
  module.hot.accept();
}
