import React, { useEffect, useState } from "react";
import "./navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show ? `navbar__black` : ``}`}>
      <img
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"
        alt="logo"
        className="navbar__logo"
      />
      <img
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E?format=jpg&name=small"
        alt="user-icon"
        className="navbar__avatar"
      />
    </div>
  );
}

export default Navbar;
