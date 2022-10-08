import React from "react";
import { useState } from "react";
import logo from '../Images/CodeChef_BVM_Chapter-logo.png';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Main css/nav_bar.css';
import { logDOM } from "@testing-library/react";
<script src="https://kit.fontawesome.com/a076d05399.js"></script>

function Nav() {
// Navbar.js
const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
      <nav className="navigation">
        <img src={logo} alt={"logo"} className="logo"/>
        <a href="/" className="brand-name">
          <b>CodeChef-BVM-Chapter</b>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded)
          }}
        >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
          {/* hamburger svg code... */}
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/about">Team</a>
            </li>
            <li>
              <a href="/about">Events</a>
            </li>
            <li>
              <a href="/about">Solution</a>
            </li>
            <li>
              <a href="/about">Alumni</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

  
export default Nav;