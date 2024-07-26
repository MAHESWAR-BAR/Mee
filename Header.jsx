import React from "react";

import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="imgDiv">
        <img src="/rapha_img.png" alt="img" />
      </div>
      <div className="navBar">
        <ul>
          <li id="home">Home</li>
          <li>About</li>
          <li>Service</li>
          <li>
            <a src="#">Pages</a>
          </li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Header;
