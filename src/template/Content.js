import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Content extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div
          className="w3-content"
          style={{ maxWidth: "2000px", marginTop: "46px" }}
        >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
