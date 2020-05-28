import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
      <div class="uk-position-relative">

        <nav className="uk-navbar-container uk-navbar-transparent">
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navbar;

