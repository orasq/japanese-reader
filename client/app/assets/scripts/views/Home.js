import React, { useEffect, useContext } from "react";
// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";
// components import
import Page from "../components/Page";
import BookList from "../components/BookList";
import HomeFilter from "../components/HomeFilter";

function Home() {
  const appState = useContext(StateContext);
  console.log("home state:", appState);
  // useEffect(() => {}, [appState]);
  return (
    <Page>
      <HomeFilter />
      <BookList />
    </Page>
  );
}

export default Home;
