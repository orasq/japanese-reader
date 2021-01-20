import React, { useState, useContext } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";

// queries import
import { getAllBooksQuery } from "../queries/queries";
// context import
import StateContext from "../contexts/StateContext";
// components import
import Page from "../components/Page";
import BookList from "../components/BookList";
import HomeFilter from "../components/HomeFilter";
import LoadingIcon from "../components/LoadingIcon";

function Home() {
  // contexts
  const appState = useContext(StateContext);
  // queries
  const { loading, error, data } = useQuery(getAllBooksQuery);

  // Alphabetical sorting function
  // Second argument in localCompare() allows to specify the target language
  function alphabeticalFiltering(books) {
    return [...books].sort((a, b) => a.title.localeCompare(b.title, "ja"));
  }

  function finishedFiltering(books) {
    return books.filter(book => !book.finished);
  }

  function searchFiltering(books) {
    return books.filter(
      book => book.title.toString().toLowerCase().indexOf(appState.searchKeyword.toLowerCase()) > -1
    );
  }

  function booksFiltering(books) {
    if (appState.finishedFilter) {
      books = finishedFiltering(books);
    }
    if (appState.alphabeticalFilter) {
      books = alphabeticalFiltering(books);
    }
    if (appState.searchKeyword) {
      books = searchFiltering(books);
    }
    return books;
  }

  return (
    <Page>
      {loading ? (
        <LoadingIcon />
      ) : (
        <>
          <HomeFilter />
          <BookList loading={loading} data={booksFiltering(data.allBooks)} />
        </>
      )}
    </Page>
  );
}

export default Home;
