import React, { useEffect } from "react";

// components import
import Page from "../components/Page";
import BookCard from "../components/BookCard";
import HomeFilter from "../components/HomeFilter";

function Home() {
  return (
    <Page>
      <HomeFilter />
      <div className="bookcard__wrap">
        <BookCard />
        <BookCard />
        <BookCard read />
        <BookCard />
        <BookCard />
        <BookCard read />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </Page>
  );
}

export default Home;
