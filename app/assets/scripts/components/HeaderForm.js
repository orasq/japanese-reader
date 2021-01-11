import React, { useEffect } from "react";

function HeaderForm() {
  return (
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
        autoComplete="off"
      />
      <button className="button">Log in</button>
    </form>
  );
}

export default HeaderForm;
