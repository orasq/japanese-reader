import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGlasses, FaAdjust, FaPlusCircle } from "react-icons/fa";

// components import
import Wrapper from "./Wrapper";

function Header() {
  // state
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  // functions
  function ToggleTheme() {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  // effects
  useEffect(() => {
    if (theme == "dark") {
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark-theme");
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark-theme");
    }
  }, [theme]);

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
          <FaAdjust onClick={ToggleTheme} class="header__theme-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
