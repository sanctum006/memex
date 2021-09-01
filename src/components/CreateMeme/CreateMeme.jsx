import React from "react";
import "./CreateMeme.css";
import MemeTemplateCard from "./../MemeTemplateCard/MemeTemplateCard";
import { useState } from "react";
import MemeTemplate from "../MemeTemplate/MemeTemplate";

function CreateMeme({ imgData, mode }) {
  const [memeImg, setMemeImg] = useState(null);
  return (
    <div className="create-meme-container bg-dark">
      {memeImg === null ? <MemeTemplate imgData={imgData} mode={mode} /> : null}
    </div>
  );
}

export default CreateMeme;
