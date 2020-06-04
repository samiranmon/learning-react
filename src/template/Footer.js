import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <img
          src="/w3images/map.jpg"
          class="w3-image w3-greyscale-min"
          style="width:100%"
          alt="footer"
        />

        <footer class="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
          <i class="fa fa-facebook-official w3-hover-opacity" />
          <i class="fa fa-instagram w3-hover-opacity" />
          <i class="fa fa-snapchat w3-hover-opacity" />
          <i class="fa fa-pinterest-p w3-hover-opacity" />
          <i class="fa fa-twitter w3-hover-opacity" />
          <i class="fa fa-linkedin w3-hover-opacity" />
          <p class="w3-medium">
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
