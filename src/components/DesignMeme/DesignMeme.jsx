import React, { useEffect, useState } from "react";
import "./DesignMeme.css";
import { useHistory } from "react-router";

function DesignMeme(props) {
  const { id } = props.match.params;

  const [imgData, setImgData] = useState({});

  const history = useHistory();

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      // .then((data) => this.setState({ imgdata: data.data.memes }));
      .then((data) => setImgData(data.data.memes.filter((e) => e.id == id)[0]));
  }, []);

  const { box_count, url } = imgData;

  const [form, setForm] = useState([]);

  const createMeme = () => {
    let link = `https://api.imgflip.com/caption_image?template_id=${id}&username=sanctum007&password=email123x`;

    form.map((box, index) => {
      link += `&boxes[${index}][text]=${box}`;
    });

    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        history.push(
          `/meme/${data.data.url.split("/")[3].split(".")[0]}/${
            data.data.url.split("/")[3].split(".")[1]
          }`
        );
      })
      .catch((err) => alert("Enter text"));
  };

  return (
    <div className="design-meme-container">
      <div className="design-meme-container-left bg-dark">
        <div id="meme-design">
          {url && <img className="meme-img" src={url} alt="" />}
        </div>
      </div>
      <div className="design-meme-container-right bg-dark">
        <div className="design-tools">
          <div className="design-tools-1">
            <form className="design-form">
              {[...Array(box_count)].map((_, index) => {
                return (
                  <input
                    type="text"
                    name={`inp${index}`}
                    placeholder={`Enter Text ${index + 1}`}
                    onChange={(e) => {
                      let temp = form;
                      temp[index] = e.target.value;
                      setForm(temp);
                    }}
                    className="input-text-box-2"
                    // onChange={}
                    // value=""
                  />
                );
              })}
            </form>
          </div>
          <button onClick={createMeme} className="create-meme">
            Create Meme
          </button>
        </div>
      </div>
    </div>
  );
}

export default DesignMeme;
