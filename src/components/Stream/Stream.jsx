import React, { useEffect, useState } from "react";
import MemePost from "../MemePost/MemePost";
import { useDataLayerValue } from "../../DataLayer";
import "./Stream.css";

function Stream() {
  const [{ memes }, dispatch] = useDataLayerValue();

  return (
    <div className="stream__container">
      <div className="stream__posts">
        {memes.map((meme, index) => (
          <MemePost
            key={index}
            name={meme.name}
            img={meme.img}
            avatar={meme.avatar}
            caption={meme.caption}
          />
        ))}
      </div>
    </div>
  );
}

export default Stream;
