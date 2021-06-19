import React from "react";
import Logo from "./logo.png";

function Header(props) {
  return (
    <div className="header">
      <div class="container">
        <div class="row">
          <div className="col-xl-12">
            <nav class="navbar">
              <a class="navbar-brand" href="/">
                <img
                  src={Logo}
                  alt=""
                  width="50"
                  height="50"
                  className="Header__logo"
                />
                <span className="align-items-center">Covid Tracker</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
