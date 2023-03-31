import React from "react";
import "./Header.css";
import logo from "../../images/Ellipse 1.png";

const Header = () => {
  return (
    <nav>
      <div className="container header">
        <h2 className="text-light">Knowledge Cafe</h2>
        <div>
          <a href="/order">Read Review</a>
          <a href="/inventory">Blog</a>
          <a href="/login">Login</a>
          <a href="/dashboard">
            <img className="img" src={logo} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
