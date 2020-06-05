import React from "react";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <div className="w3-top">
          <div className="w3-bar w3-black w3-card">
            <a
              className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
              href="javascript:void(0);"
              onclick="myFunction()"
              title="Toggle Navigation Menu"
            >
              <i className="fa fa-bars" />
            </a>
            <a href="/" className="w3-bar-item w3-button w3-padding-large">
              HOME
            </a>
            <a
              href="/band"
              className="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              BAND
            </a>
            <a
              href="/tour"
              className="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              TOUR
            </a>
            <a
              href="/contact"
              className="w3-bar-item w3-button w3-padding-large w3-hide-small"
            >
              CONTACT
            </a>
            <div className="w3-dropdown-hover w3-hide-small">
              <button className="w3-padding-large w3-button" title="More">
                MORE <i className="fa fa-caret-down" />
              </button>
              <div className="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="#" className="w3-bar-item w3-button">
                  Merchandise
                </a>
                <a href="#" className="w3-bar-item w3-button">
                  Extras
                </a>
                <a href="#" className="w3-bar-item w3-button">
                  Media
                </a>
              </div>
            </div>
            <a
              href="javascript:void(0)"
              className="w3-padding-large w3-hover-red w3-hide-small w3-right"
            >
              <i className="fa fa-search" />
            </a>
          </div>
        </div>

        {/* Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) */}
        <div
          id="navDemo"
          className="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
          style={{ marginTop: "46px" }}
        >
          <a
            href="/band"
            className="w3-bar-item w3-button w3-padding-large"
            onclick="myFunction()"
          >
            BAND
          </a>
          <a
            href="/tour"
            className="w3-bar-item w3-button w3-padding-large"
            onclick="myFunction()"
          >
            TOUR
          </a>
          <a
            href="/contact"
            className="w3-bar-item w3-button w3-padding-large"
            onclick="myFunction()"
          >
            CONTACT
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-padding-large"
            onclick="myFunction()"
          >
            MERCH
          </a>
        </div>
      </div>
    );
  }
}
