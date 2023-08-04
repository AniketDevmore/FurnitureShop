import React from "react";
import "./LandingPage.css";
import landingPageBackImg from "../../images/landingPageBackImg.jpg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div className="landingOuterDiv">
        <div className="landingPageBack">
          <img src={landingPageBackImg} alt="Luxary beds" />
        </div>
        <div className="landingPageFront">
          <h1>BLACK OAK</h1>
          <hr />
          <p>Deluxe Furniture At Best Price</p>
          <Link>OUR PRODUCTS</Link>
        </div>
      </div>
      <div className="landingPageServices">
        <div className="serviceTop">
          <h1>Services</h1>
          <hr />
        </div>
        <div className="serviceBottom">
          <div>
            <h5 style={{ color: "#535252" }}>
              <i class="fa-solid fa-wrench"></i>
            </h5>
            <h6>Support</h6>
            <p>
              We Support our customers at every step from the point they connect
              with us.
            </p>
          </div>
          <div>
            <h5 style={{ color: "#af5b5b" }}>
              <i class="fa-solid fa-heart"></i>
            </h5>
            <h6>We Care for you</h6>
            <p>We provide best products to our customers.</p>
          </div>
          <div>
            <h5 style={{ color: "#3a3939" }}>
              <i class="fa-solid fa-network-wired"></i>
            </h5>
            <h6>Connect with Us</h6>
            <p>
              We Welcome you to connect with us through various social media
              networks.
            </p>
          </div>
          <div>
            <h5 style={{ color: "#af7f52" }}>
              <i class="fa-solid fa-comment-dots"></i>
            </h5>
            <h6>Give Feedback</h6>
            <p>
              We would love to recieve your valuable feedback which will help us
              improve.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
