import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="shadow">
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark box">
        <div className="container-fluid">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="navbar-brand brand-txt brand-logo">MemeX</span>
          </Link>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <Link to="/choose-template" style={{ textDecoration: "none" }}>
                  <button type="button" className="header-btn">
                    Create Meme
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/stream-memes" style={{ textDecoration: "none" }}>
                  <button type="button" className="header-btn">
                    Stream Memes
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
