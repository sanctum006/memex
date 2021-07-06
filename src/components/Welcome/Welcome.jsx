import React from "react";
import "./Welcome.css";

function Welcome() {
  return (
    <div className="welcome-container bg-dark">
      <h1>Welcome to MemeX</h1>
      <h2>A platform to create and stream memes.</h2>
      <div className="welcome-buttons">
        <button type="button" class="create-meme-btn">
          Create Meme
        </button>
        <button type="button" class="stream-meme-btn">
          Stream Memes
        </button>
      </div>
    </div>
  );
}

export default Welcome;
