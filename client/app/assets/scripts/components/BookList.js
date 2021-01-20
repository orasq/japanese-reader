import React, { useState, useContext, useEffect } from "react";
import { useQuery, NetworkStatus } from "@apollo/client";

// queries import
import { getAllBooksQuery } from "../queries/queries";
// contexts import
import StateContext from "../contexts/StateContext";
// components import
import BookCard from "../components/BookCard";
import LoadingIcon from "../components/LoadingIcon";

function BookList() {
  // state
  // const [allBooks, setAllBooks] = useState([]);
  // const [visibleBooks, setVisibleBooks] = useState([]);
  // contexts
  const appState = useContext(StateContext);

  // queries
  const { loading, error, data, refetch, networkStatus } = useQuery(getAllBooksQuery);

  //functions
  function displayBooks() {
    const booksToDisplay = data.allBooks;
    // alphatical sort
    if (appState.alphabeticalFilter) {
      booksToDisplay.sort((a, b) => {
        return a.title - b.title;
      });
    }
    // finished book filter
    if (appState.finishedFilter) {
      booksToDisplay.filter(book => {
        return book.finished;
      });
    }
    return booksToDisplay.map(book => {
      return <BookCard key={book.id} book={book} />;
    });
  }

  // useEffect(() => {
  //   refetch();
  // }, []);

  // effects
  // useEffect(() => {
  //   if (!loading) {
  //     setAllBooks(data.allBooks);
  //     visibleBooks(data.allBooks);
  //   }
  // }, [loading]);

  // useEffect(() => {
  //   displayBooks();
  // }, [appState.finishedFilter]);

  // if (networkStatus === NetworkStatus.refetch) return "Refetching!";

  return <div className="bookcard__wrap">{loading ? <LoadingIcon /> : displayBooks()}</div>;
}

export default BookList;
