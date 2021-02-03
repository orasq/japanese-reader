import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

// components import
import Page from "./Page";

function NotFound() {
  return (
    <Page title="404 Not Found">
      <div className="flex-col-center text-center">
        <h1>Oops! This page cannot be found</h1>
        <p className="mt-xs mb-s">
          Sorry but the page you are looking for does not exist, has been removed or is temporarily
          unavailable.
        </p>
        <Link to="/" className="button">
          Go to the homepage
        </Link>
      </div>
    </Page>
  );
}

export default NotFound;
