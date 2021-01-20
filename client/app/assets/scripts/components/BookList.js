import React, { useState, useContext, useEffect } from "react";

// contexts import
import StateContext from "../contexts/StateContext";
// components import
import BookCard from "../components/BookCard";

function BookList(props) {
  // contexts
  const appState = useContext(StateContext);

  //functions
  function displayBooks() {
    const booksToDisplay = props.data;

    // if (appState.finishedFilter || appState.alphabeticalFilter) {
    //   if (appState.finishedFilter) {
    //     const filtered = booksToDisplay.filter(book => {
    //       return !book.finished;
    //     });
    //     return filtered.map(book => {
    //       return <BookCard key={book.id} book={book} />;
    //     });
    //   }
    // }

    // alphatical sort
    // if (appState.alphabeticalFilter) {
    //   booksToDisplay.sort((a, b) => {
    //     return a.title - b.title;
    //   });
    // }
    // finished book filter

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

  return <div className="bookcard__wrap">{displayBooks()}</div>;
}

export default BookList;
