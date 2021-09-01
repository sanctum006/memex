import React from "react";
import "./Meme.css";
import DomToImage from "dom-to-image";
import Modal from "@material-ui/core/Modal";
import { useState } from "react";
import { useParams } from "react-router";
import MemeData from "../../MemeData";

function Meme() {
  const { id, type } = useParams();

  const url = `https://i.imgflip.com/${id}.${type}`;

  const [open, setOpen] = React.useState(false);

  const [memes, setMemes] = MemeData();

  const [form, setForm] = useState({
    name: "",
    avatar: "",
    caption: "",
    img: url,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMemes([...memes, { ...form }]);
  };

  function downloadtable() {
    let node = document.getElementById("meme");

    DomToImage.toPng(node)
      .then(function (dataUrl) {
        let img = new Image();
        img.src = dataUrl;
        downloadURI(dataUrl, "meme.png");
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="meme__container">
      <img id="meme" src={url} alt="" />
      <div>
        <button className="download-meme" onClick={downloadtable}>
          Download
        </button>
        <button className="share-meme" onClick={() => setOpen(true)}>
          Share
        </button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => setOpen(false)}
        >
          <form className="meme__form" onClick={(e) => e.stopPropagation()}>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Name"
            />
            <input
              type="text"
              value={form.avatar}
              onChange={(e) => setForm({ ...form, avatar: e.target.value })}
              placeholder="Avatar Link"
            />
            <input
              type="text"
              value={form.caption}
              onChange={(e) => setForm({ ...form, caption: e.target.value })}
              placeholder="Caption"
            />
            <button onClick={handleSubmit} className="postButton">
              Post
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Meme;
