import React, { useEffect } from "react";

// components import
import Page from "../components/Page";
import BookCard from "../components/BookCard";

function Home() {
  return (
    <Page>
      <div className="bookcard__wrap">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </Page>
  );
}

export default Home;
