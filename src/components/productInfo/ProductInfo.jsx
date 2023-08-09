import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { useSelector } from "react-redux";
import "./ProductInfo.css";
import Footer from "../footer/Footer";

const ProductInfo = () => {
  const [info, setInfo] = useState({
    topImg: "",
    img: [],
    title: "",
    price: 0,
    details: "",
  });

  //get id from url
  const id = useParams("id");

  //get data from store
  const products = useSelector((state) => state.counterSlice.products);

  useEffect(() => {
    //filter out required data
    let productData = products.find((ele) => ele.id === id["id"]);
    // console.log(productData);

    setInfo({
      ...info,
      topImg: productData["img"][0],
      img: productData["img"],
      title: productData["title"],
      price: productData["price"],
      details: productData["details"],
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div className="landingOuterDiv">
          <div className="landingPageBack">
            <img src={info.topImg} alt={info.title} />
          </div>
          <div className="landingPageFront">
            <h1>{info.title}</h1>
            <hr style={{ marginBottom: "35px" }} />
            <Link to={"/products"}>BACK TO PRODUCTS</Link>
          </div>
        </div>
        <div className="infoBottomDiv">
          <div className="imfoImageList">
            {info.img.map((ele, i) => (
              <div key={i}>
                <img src={ele} alt={info.title} />
              </div>
            ))}
          </div>
          <div className="infoDetailDiv">
            <div>
              <h6>Details</h6>
              <p>{info.details}</p>
            </div>
            <div>
              <h6>Info</h6>
              <p>Price : ₹{info.price}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductInfo;
