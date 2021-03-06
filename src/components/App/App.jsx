import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import DarkMode from "../DarkMode/DarkMode";
import CreateMeme from "../CreateMeme/CreateMeme";
import Welcome from "../Welcome/Welcome";
import DesignMeme from "./../DesignMeme/DesignMeme";
import Meme from "../Meme/Meme";
import Stream from "../Stream/Stream";

class App extends React.Component {
  state = {
    imgdata: [],
    mode: false,
  };

  handleModeChange = () => {
    this.setState({
      mode: !this.state.mode,
    });
  };

  componentDidMount() {
    // fetch("https://i.imgflip.com/30b1gx.jpg")
    //   .then((imgInfo) => imgInfo.json())
    //   .then((info) => this.setState({imgdata: info}));

    const fetchData = () => {
      return fetch("https://api.imgflip.com/get_memes")
        .then((response) => response.json())
        .then((data) => this.setState({ imgdata: data.data.memes }));
    };

    fetchData();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Route path="/" exact>
            <Welcome mode={this.state.mode} />
          </Route>
          <Route path="/choose-template">
            <CreateMeme mode={this.state.mode} imgData={this.state.imgdata} />
          </Route>
          <Route path="/stream-memes">
            <Stream />
          </Route>
          <Route path="/create-meme/:id" component={DesignMeme} />
          <Route path="/meme/:id/:type" component={() => <Meme />} />
          {/* <Route path="/" exact>
          <Welcome mode={mode} setMode={setMode} />
        </Route> */}
        </BrowserRouter>
        <Footer mode={this.state.mode} />
        {/* <DarkMode
          mode={this.state.mode}
          handleModeChange={this.handleModeChange}
        /> */}
      </div>
    );
  }
}

export default App;
