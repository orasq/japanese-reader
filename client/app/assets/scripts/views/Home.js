import React, { useState, useContext } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";

// queries import
import { getAllBooksQuery } from "../queries/queries";
// context import
import DispatchContext from "../contexts/DispatchContext";
import StateContext from "../contexts/StateContext";
// components import
import Page from "../components/Page";
import BookList from "../components/BookList";
import HomeFilter from "../components/HomeFilter";
import LoadingIcon from "../components/LoadingIcon";

function Home() {
  const [searchKeyword, setSearchKeyword] = useState("");
  // queries
  const { loading, error, data } = useQuery(getAllBooksQuery);

  //functions

  // basic search filter on the title of the book
  function searchFiltering(books) {
    return books.filter(book => book.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1);
  }
  return (
    <Page>
      {loading ? (
        <LoadingIcon />
      ) : (
        <>
          <HomeFilter setSearchKeyword={setSearchKeyword} />
          <BookList loading={loading} data={searchFiltering(data.allBooks)} />
        </>
      )}
    </Page>
  );
}

export default Home;
