import React from "react";

function Footer() {
  const date = new Date();

  return (
    <footer className="footer">
      <div className="footer__wrap">
        <p>© {date.getFullYear()} o.rasq</p>
      </div>
    </footer>
  );
}

export default Footer;
