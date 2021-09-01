import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";

function Welcome({ mode, setMode }) {
  return (
    <div
      className={`welcome-container ${mode ? "bg-footer-custom" : "bg-dark"}`}
    >
      <h1 style={{ color: `${mode ? "#000" : "#fff"}` }}>Welcome to MemeX</h1>
      <h2
        style={{ color: `${mode ? "#555" : "#bbb"}` }}
        className="welcome-heading-2"
      >
        A platform to create and stream memes.
      </h2>
      <div className="welcome-buttons">
        <Link to="/choose-template" className>
          <button
            type="button"
            className="create-meme-btn"
            style={{
              color: `${mode ? "#3C5186" : "#228dff"}`,
              borderColor: `${mode ? "#3C5186" : "#228dff"}`,
            }}
          >
            Create Meme
          </button>
        </Link>
        <Link to="/stream-meme">
          <button
            type="button"
            className="stream-meme-btn"
            style={{
              color: `${mode ? "#5D8233" : "#b3ff51"}`,
              borderColor: `${mode ? "#5D8233" : "#b3ff51"}`,
            }}
          >
            Stream Memes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
