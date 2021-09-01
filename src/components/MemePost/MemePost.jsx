import React from "react";
import "./MemePost.css";

function MemePost({ name, img, avatar, caption }) {
  return (
    <div className="memePost__container">
      <div className="memePost__user">
        <img src={avatar} alt="meme-user-avatar" className="memePost__avatar" />
        <h1>{name}</h1>
      </div>
      <hr className="memePost__rule" />
      <div className="memePost__captionPost">
        <h2>{caption}</h2>
        <img src={img} alt="meme-img" className="memePost__img" />
      </div>
    </div>
  );
}

export default MemePost;
