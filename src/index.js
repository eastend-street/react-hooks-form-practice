import React from "react";
import ReactDOM from "react-dom";
import ParentComp from "./components/ParentComp/ParentComp";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
