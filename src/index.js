import React from "react";
import ReactDOM from "react-dom";
import Post from "./post";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Post title="Hello World!" />
      <Post title="Hello World!" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
