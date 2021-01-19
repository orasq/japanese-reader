import React, { useState, useContext } from "react";

// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";
// components import
import Page from "../components/Page";
import BookList from "../components/BookList";
import HomeFilter from "../components/HomeFilter";

function Home() {
  return (
    <Page>
      <HomeFilter />
      <BookList />
    </Page>
  );
}

export default Home;
