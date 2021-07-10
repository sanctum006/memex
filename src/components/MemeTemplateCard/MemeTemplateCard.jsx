import React from "react";
import "./MemeTemplateCard.css";

function MemeTemplateCard({ imgSrc }) {
  return (
    <div className="meme-template-card">
      <img
        src={imgSrc}
        className="meme-template-card-img"
        alt="meme-template"
      />
    </div>
  );
}

export default MemeTemplateCard;
