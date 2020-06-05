import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <img
          src={require("../images/map.jpg")}
          className="w3-image w3-greyscale-min"
          style={{ width: "100%" }}
          alt="footer"
        />

        <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
          <i className="fa fa-facebook-official w3-hover-opacity" />
          <i className="fa fa-instagram w3-hover-opacity" />
          <i className="fa fa-snapchat w3-hover-opacity" />
          <i className="fa fa-pinterest-p w3-hover-opacity" />
          <i className="fa fa-twitter w3-hover-opacity" />
          <i className="fa fa-linkedin w3-hover-opacity" />
          <p className="w3-medium">
            Powered by{" "}
            <a
              href="https://www.w3schools.com/w3css/default.asp"
              target="_blank"
            >
              w3.css
            </a>
          </p>
        </footer>
      </div>
    );
  }
}
