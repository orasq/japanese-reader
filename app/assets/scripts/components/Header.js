import React, { useEffect } from "react";
import { FaGlasses, FaAdjust, FaPlusCircle } from "react-icons/fa";

// components import
import Wrapper from "./Wrapper";

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">
          <FaGlasses />
        </div>
        <div className="header__tools">
          <button className="button">
            <FaPlusCircle className="button__icon" /> Add a Book
          </button>
          <FaAdjust class="header__theme-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
