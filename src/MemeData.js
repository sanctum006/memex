import React, { useState } from "react";

function MemeData() {
  const [memes, setMemes] = useState([
    {
      name: "sanctum007",
      img: "https://i.imgflip.com/5ldeyb.jpg",
      avatar:
        "https://i.pinimg.com/736x/ef/de/78/efde78cc09aeece4b344c689b6e84ead.jpg",
      caption: "CPOP",
    },
  ]);

  console.log(memes);

  return [memes, setMemes];
}

export default MemeData;
