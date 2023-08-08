import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footerOuter">
      <div>
        <Link to={"/contact-us"}>CONTACT US</Link>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      </div>
      <div>
        <p>Call At: 1234xxxx90</p>
      </div>
      <div>
        <p>Copyright© 2021 by Black Oak.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
