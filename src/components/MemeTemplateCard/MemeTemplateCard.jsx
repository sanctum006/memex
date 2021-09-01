import React from "react";
import { Link } from "react-router-dom";
import "./MemeTemplateCard.css";

function MemeTemplateCard({ imgSrc, id }) {
  return (
    <div className="meme-template-card">
      <Link to={`/create-meme/${id}`}>
        <img
          src={imgSrc}
          className="meme-template-card-img"
          alt="meme-template"
        />
      </Link>
    </div>
  );
}

export default MemeTemplateCard;
