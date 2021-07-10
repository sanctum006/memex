import React from "react";
import "./DesignMeme.css";
import TextBox1 from "../TextBox1/TextBox1";
import TextBox2 from "./../TextBox2/TextBox2";

function DesignMeme({ img }) {
  const adjustImgSize = () => {};

  return (
    <div className="design-meme-container">
      <div className="design-meme-container-left bg-dark">
        {img && (
          <img
            onLoad={adjustImgSize}
            className="meme-img"
            src={img.url}
            alt=""
          />
        )}
        <TextBox1 />
        <TextBox2 />
      </div>
      <div className="design-meme-container-right bg-dark">
        <div className="design-tools"></div>
      </div>
    </div>
  );
}

export default DesignMeme;
