import React, { useEffect, useContext } from "react";
// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";
// components import
import Page from "../components/Page";
import BookList from "../components/BookList";
import HomeFilter from "../components/HomeFilter";

function Home() {
  const AppState = useContext(StateContext);
  console.log("current state", AppState);
  // useEffect(() => {}, [AppState]);
  return (
    <Page>
      <HomeFilter />
      <BookList />
    </Page>
  );
}

export default Home;
