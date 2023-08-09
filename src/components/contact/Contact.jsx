import React from "react";
import "./Contact.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import contactUs from "../../images/contactUs.jpg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="landingOuterDiv">
          <div className="landingPageBack">
            <img src={contactUs} alt="img" />
          </div>
          <div className="landingPageFront">
            <h1>CONTACT US</h1>
            <hr />
            <p>We Are Always There For You</p>
            <Link to={"/"}>BACK TO HOME</Link>
          </div>
        </div>
      </div>
      <div className="contactOuter">
        <div className="productFeaturesTitle">
          <h6>Contact Us</h6>
          <hr />
        </div>
        <div>
          <div>
            <h6>
              <i className="fa-solid fa-phone"></i>
            </h6>
            <h5>Call At</h5>
            <p>1234xxxx90</p>
          </div>
          <div>
            <h6>
              <i className="fa-solid fa-envelopes-bulk"></i>
            </h6>
            <h5>Mail Us At</h5>
            <p>example@email.com</p>
          </div>
          <div>
            <h6>
              <i className="fa-brands fa-instagram"></i>
            </h6>
            <h5>Instagram</h5>
            <p>
              <Link>FOLLOW</Link>
            </p>
          </div>
          <div>
            <h6>
              <i className="fa-brands fa-facebook-f"></i>
            </h6>
            <h5>Facebook</h5>
            <p>
              <Link>FOLLOW</Link>
            </p>
          </div>
          <div>
            <h6>
              <i className="fa-solid fa-address-book"></i>
            </h6>
            <h5>Address</h5>
            <p>Street, Area, City</p>
          </div>
          <div>
            <h6>
              <i className="fa-solid fa-location-dot"></i>
            </h6>
            <h5>Find Us</h5>
            <p>
              <Link>LOCATE</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
