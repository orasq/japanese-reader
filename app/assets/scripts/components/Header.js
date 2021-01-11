import React, { useEffect } from "react";

// components import
import Wrapper from "./Wrapper";

function Header() {
  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__logo">読書</div>
        <form action="" className="form form__login">
          <input
            className="form__login-input"
            name="username"
            placeholder="username"
            type="text"
            autoComplete="off"
          />
          <input
            className="form__login-input"
            name="password"
            placeholder="password"
            type="password"
          />
          <button>Log in</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
