import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App.jsx";
import reducer, { initialState } from "./reducer.js";
import { DataLayer } from "./DataLayer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
