import React, { useEffect } from "react";

// components import
import Wrapper from "./Wrapper";

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">🤓</div>
        <div className="header__tools">
          <button className="button">
            <ion-icon name="add-circle"></ion-icon> Add a Book
          </button>
          <ion-icon class="header__theme-icon" name="contrast"></ion-icon>
        </div>
      </div>
    </header>
  );
}

export default Header;
