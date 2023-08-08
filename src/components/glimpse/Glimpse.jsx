import React, { useEffect, useState } from "react";
import "./Glimpse.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import glimpsebackground from "../../images/glimpse.jpg";
import { useSelector } from "react-redux";

const Glimpse = () => {
  const [glimpseProduct, setGlimpseProduct] = useState([]);

  const glimpseData = useSelector((state) => state.counterSlice.products);
  useEffect(() => {
    let data = glimpseData.map((ele) => ele.img[2]);
    setGlimpseProduct(data);
    // console.log(data);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="landingOuterDiv">
          <div className="landingPageBack">
            <img src={glimpsebackground} alt="Luxary beds" />
          </div>
          <div className="landingPageFront">
            <h1>BLACK OAK</h1>
            <hr />
            <p>Deluxe Furniture At Best Price</p>
            <Link to={"/contact-us"}>CONTACT US</Link>
          </div>
        </div>
      </div>
      <div className="galleryOuter">
        <div className="productFeaturesTitle">
          <h6>Gallery</h6>
          <hr />
        </div>
        <div>
          {glimpseProduct.map((ele, i) => (
            <div key={i}>
              <img src={ele} alt="img" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Glimpse;
