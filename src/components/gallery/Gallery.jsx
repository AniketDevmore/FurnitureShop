import React, { useEffect, useState } from "react";
import "./Gallery.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import gallerybackground from "../../images/gallery.jpg";
import { useSelector } from "react-redux";

const Glimpse = () => {
  const [galleryProduct, setGalleryProduct] = useState([]);

  const galleryData = useSelector((state) => state.counterSlice.products);
  useEffect(() => {
    let data = galleryData.map((ele) => ele.img[2]);
    setGalleryProduct(data);
    // console.log(data);
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="landingOuterDiv">
          <div className="landingPageBack">
            <img src={gallerybackground} alt="Luxary beds" />
          </div>
          <div className="landingPageFront">
            <h1>GALLERY</h1>
            <hr />
            <p>Appalling Products</p>
            <Link to={"/products"}>OUR PRODUCTS</Link>
          </div>
        </div>
      </div>
      <div className="galleryOuter">
        <div className="productFeaturesTitle">
          <h6>Gallery</h6>
          <hr />
        </div>
        <div>
          {galleryProduct.map((ele, i) => (
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
