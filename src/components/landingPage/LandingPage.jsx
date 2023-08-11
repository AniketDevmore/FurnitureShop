import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import landingPageBackImg from "../../images/landingPageBackImg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const [glimpseProduct, setGlimpseProduct] = useState([]);
  // get featured product data
  const featuredPro = useSelector(
    (state) => state.counterSlice.featuredProduct
  );

  // get glimpse data
  const glimpseData = useSelector((state) => state.counterSlice.products);
  useEffect(() => {
    let data = glimpseData.map((ele) => ele.img[1]);
    setGlimpseProduct(data.splice(1, 6));
    // console.log(data);
  }, []);
  return (
    <div>
      {/* heading image */}
      <div className="landingOuterDiv">
        <div className="landingPageBack">
          <img src={landingPageBackImg} alt="Luxary beds" />
        </div>
        <div className="landingPageFront">
          <h1>BLACK OAK</h1>
          <hr />
          <p>Furniture At Best Price</p>
          <Link to={"/products"}>OUR PRODUCTS</Link>
        </div>
      </div>
      {/* services section */}
      <div className="landingPageServices">
        <div className="serviceTop">
          <h1>Services</h1>
          <hr />
        </div>
        <div className="serviceBottom">
          <div>
            <h5 style={{ color: "#535252" }}>
              <i className="fa-solid fa-wrench"></i>
            </h5>
            <h6>Support</h6>
            <p>
              We give you available, helpful, professional customer service
              24/7.
            </p>
          </div>
          <div>
            <h5 style={{ color: "#af5b5b" }}>
              <i className="fa-solid fa-truck"></i>
            </h5>
            <h6>Fastest Delivery & Services</h6>
            <p>We provide same day, and emergency services available.</p>
          </div>
          <div>
            <h5 style={{ color: "#3a3939" }}>
              <i className="fa-solid fa-house-user"></i>
            </h5>
            <h6>Home Service</h6>
            <p>
              We send the best qualified professional and experienced technician
              for the type of job requested.
            </p>
          </div>
          <div>
            <h5 style={{ color: "#af7f52" }}>
              <i className="fa-solid fa-comment-dots"></i>
            </h5>
            <h6>Give Feedback</h6>
            <p>
              We would love to recieve your valuable feedback which will help us
              improve.
            </p>
          </div>
        </div>
      </div>
      {/* featured product section */}
      <div className="productFeaturesMain">
        <div className="productFeaturesTitle">
          <h6>Featured Product</h6>
          <hr />
        </div>
        <div className="productFeatures">
          {featuredPro.map((ele, i) => (
            <div key={i}>
              <div>
                <div>
                  <img src={ele.img[0]} alt={ele.title} />
                  <div>
                    <h5>
                      Price starts from <br /> ₹{ele.price}
                    </h5>
                    <Link to={`/features/${ele.id}`}>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </Link>
                  </div>
                </div>
                <div>
                  <h6>{ele.title}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* product glimpse section */}
      <div className="galleryOuter">
        <div>
          <h6>Products Gallery</h6>
          <hr />
        </div>
        <div>
          {glimpseProduct.map((ele, i) => (
            <div key={i}>
              <img src={ele} alt="img" />
            </div>
          ))}
        </div>
        <div>
          <Link to={"/gallery"}>MORE...</Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
