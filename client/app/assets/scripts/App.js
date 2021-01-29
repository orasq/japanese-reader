/* loading CSS in Javascript to automatically inject new css
in browser's memory without having to refresh the browser.
Development performance and practical benefits */
import "../styles/styles.css";

// React
import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Apollo setup to be able to use GraphQL queries
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://japanese-reader-public.herokuapp.com/graphql",
  cache: new InMemoryCache()
});

// views & components import
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingMessage from "./components/FloatingMessage";
import Home from "./views/Home";
import Reader from "./views/Reader";
import CreateBook from "./views/CreateBook";
import EditBook from "./views/EditBook";

// app context, state & reducer import
import StateContext from "./contexts/StateContext";
import DispatchContext from "./contexts/DispatchContext";
import AppState from "./states/AppState";
import AppReducer from "./reducers/AppReducer";

function App() {
  const [state, dispatch] = useReducer(AppReducer, AppState);
  return (
    <ApolloProvider client={client}>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <BrowserRouter basename="https://orasq.github.io/japanese-reader/">
            <FloatingMessage />
            <Header />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              {/* To be eable to use "params" in graphql query */}
              <Route path="/book/:bookId" component={Reader} exact />
              <Route path="/book/:bookId/edit" component={EditBook} exact />
              <Route path="/create-book">
                <CreateBook />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </ApolloProvider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

/* allows webpack's hot modules replacements */
if (module.hot) {
  module.hot.accept();
}
