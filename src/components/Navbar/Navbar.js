// import React, { useState, useEffect, useLayoutEffect } from "react";
// import { NavHashLink } from "react-router-hash-link";
import "./Navbar.css";
import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      var navbar = document.getElementById("navbar");
      if (
        window.scrollY > 0 &&
        window.innerHeight + window.scrollY + 50 < document.body.offsetHeight
      ) {
        navbar.classList.remove("navbar-initial");
        navbar.classList.add("navbar-active");
      } else {
        navbar.classList.remove("navbar-active");
        navbar.classList.add("navbar-initial");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-initial" id="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          <img
            className="image-container"
            src="./Logo_Icon/icahd.png"
            alt="ICA Logo"
          />
          ICA
        </a>
        <div className="navbar__toggle" id="mobile_menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a href="/events.html" className="navbar__links">
              Events
            </a>
          </li>
          <li className="navbar__item">
            <a href="/aboutICA.html" className="navbar__links">
              Info
            </a>
          </li>
          <li className="navbar__btn">
            <a
              href="https://docs.google.com/forms/d/1XxYnGe-9Wc2HJ0IkIaHki5Znb-phiKNp-trRoMppRe4/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
