import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navMainDiv">
        <nav className="navbar">
          <div className="logoDiv">
            <Link to={"/"}>
              <div>
                <h1>Black Oak</h1>
                <p>Furniture</p>
              </div>
            </Link>
          </div>
          <div className="toggleDiv">
            <input type="checkbox" id="checkbox-toggle" />
            <label htmlFor="checkbox-toggle" className="hamburger">
              <i className="fa-solid fa-bars-staggered"></i>
            </label>
            <div className="menu">
              <ul className="menuUl">
                <li className="menuLi">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="menuLi">
                  <Link to={"/products"}>Products</Link>
                </li>
                <li className="menuLi">
                  <Link to={"/contact-us"}>Contact Us</Link>
                </li>
                <li className="menuLi">
                  <Link to={"/glimpse"}>Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
