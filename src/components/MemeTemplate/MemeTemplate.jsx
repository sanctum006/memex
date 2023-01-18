import React from "react";
import "./MemeTemplate.css";
import MemeTemplateCard from "../MemeTemplateCard/MemeTemplateCard";
import { useState } from "react";

function MemeTemplate({ imgData, mode }) {
  const memeTemplates = imgData.map((imgEle, index) => (
    <MemeTemplateCard key={index} imgSrc={imgEle.url} id={imgEle.id} />
  ));

  const memeTemplates1 = memeTemplates.splice(0, 5);
  const memeTemplates2 = memeTemplates.splice(0, 5);
  const memeTemplates3 = memeTemplates.splice(0, 5);
  const memeTemplates4 = memeTemplates.splice(0, 5);

  const handleClick = () => {
    // if (memeTemplates1.length == 25) {
    //   document.querySelector(".load-more-btn").textContent =
    //     "No more images to load :/";
    //   return;
    // }

    memeTemplates1.push(memeTemplates.splice(0, 5));
    memeTemplates2.push(memeTemplates.splice(0, 5));
    memeTemplates3.push(memeTemplates.splice(0, 5));
    memeTemplates4.push(memeTemplates.splice(0, 5));
  };

  return (
    <div
      className="meme-template-container"
      className={`welcome-container ${mode ? "" : "bg-dark"}`}
    >
      <h2 className="select-heading">
        <input
          className="meme-template-img-upload"
          style={{ display: "none" }}
          type="file"
          name=""
          id=""
        />
        Choose
        {/* or{" "}
        <button
          onClick={() =>
            document.querySelector(".meme-template-img-upload").click()
          }
        >
          Upload
        </button>{" "} */}{" "}
        a template
      </h2>
      <div className="meme-template-card-container">
        <div className="row">
          <div className="column">{memeTemplates1}</div>
          <div className="column">{memeTemplates2}</div>
          <div className="column">{memeTemplates3}</div>
          <div className="column">{memeTemplates4}</div>
        </div>
      </div>
      {/* <button className="load-more-btn" onClick={handleClick}>
          Load More...
        </button> */}
    </div>
  );
}

export default MemeTemplate;
