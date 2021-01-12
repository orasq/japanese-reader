import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaGlasses, FaAdjust, FaPlusCircle } from "react-icons/fa";

// components import
import Wrapper from "./Wrapper";

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <Link to="/" className="header__logo">
          <FaGlasses />
        </Link>
        <div className="header__tools">
          <Link to="/create-book">
            <button className="button">
              <FaPlusCircle className="button__icon" /> Add a Book
            </button>
          </Link>
          <FaAdjust class="header__theme-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
