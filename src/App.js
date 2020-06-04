import React from "react";
import "./styles.css";
//import MyComponent from "./MyComponent";
import Content from "./template/Content";
import Navbar from "./template/Navbar";

export default function App() {
  return (
    <div>
      <Content />
      <Navbar />
    </div>

    /* <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2> This is my start progrem</h2>
      <h4> This is good praktice plat form 1</h4>
      <MyComponent />
    </div> */
  );
}
