import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="shadow">
      <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark box">
        <div class="container-fluid">
          <a class="navbar-brand brand-txt" href="#">
            MemeX
          </a>
          <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
            <ul class="navbar-nav">
              <li class="nav-item me-2">
                <button type="button" class="header-btn">
                  Create Meme
                </button>
              </li>
              <li class="nav-item">
                <button type="button" class="header-btn">
                  Stream Memes
                </button>
              </li>
            </ul>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
