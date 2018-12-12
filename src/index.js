import React from "react";
import ReactDOM from "react-dom";
import Post from "./post";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Post title="Hello World!" />
      <Post title="Hello World!" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
