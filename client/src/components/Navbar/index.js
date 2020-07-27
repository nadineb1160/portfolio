import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <div className="uk-position-relative">
      <div className="uk-position-top-center">
        <nav className="uk-navbar-container uk-navbar-transparent">
          <div className="uk-navbar-center">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/about" id="about">About</Link>
              </li>
              <li>
                <Link to="/portfolio" id="portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/" id="name">Nadine Bundschuh</Link>
              </li>
              <li>
                <Link to="/experience" id="experience">Experience</Link>
              </li>
              <li>
                <Link to="/contact" id="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

