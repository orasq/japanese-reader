import React, { useEffect } from "react";

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
