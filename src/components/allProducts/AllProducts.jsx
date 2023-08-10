import React, { useState } from "react";
import "./AllProducts.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import productsBack from "../../images/products.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AllProducts = () => {
  const allProduct = useSelector((state) => state.counterSlice.products);
  const [seletedProduct, setSeletedProduct] = useState(allProduct);

  const changeHandler = (event) => {
    let value = event.target.value;

    let newData1 = allProduct.filter(
      (ele) => ele.id === value || ele.price >= value
    );

    if (value === "all") {
      setSeletedProduct(allProduct);
    } else if (newData1) {
      setSeletedProduct(newData1);
    }
  };
  return (
    <div>
      <Navbar />
      <div>
        <div className="landingOuterDiv">
          <div className="landingPageBack">
            <img src={productsBack} alt="Luxary beds" />
          </div>
          <div className="landingPageFront">
            <h1>Our Products</h1>
            <hr />
            <p>Our Different Range Products</p>
            <Link to={"/contact-us"}>CONTACT US</Link>
          </div>
        </div>
      </div>
      <div className="productOuter">
        <div className="productFeaturesTitle">
          <h6>All Products</h6>
          <hr />
        </div>
        <div>
          <div>
            <label htmlFor="productName">Product type</label>

            <select onChange={changeHandler} name="furniture" id="productName">
              <option value="all">All products</option>
              <option value="double-bed">Double bed</option>
              <option value="single-bed">Single bed</option>
              <option value="couch">Couch</option>
              <option value="digning-table">Digning table</option>
              <option value="bean-bag">Bean bag</option>
              <option value="dressing-table">Dressing table</option>
              <option value="chair">Chair</option>
              <option value="bookshelve">Bookshelve</option>
              <option value="garden-furniture">Garden furniture</option>
              <option value="recliner">Recliner</option>
              <option value="desk">Desk</option>
              <option value="bench">Bench</option>
            </select>
          </div>
          <div>
            <label htmlFor="price">Product price</label>

            <input
              onChange={changeHandler}
              id="price"
              type="range"
              min={1000}
              max={15000}
            />
          </div>
        </div>

        {/* css used from inading page */}
        <div className="productFeatures">
          {seletedProduct.map((ele, i) => (
            <div key={i}>
              <div>
                <div style={{ width: "250px", height: "150px" }}>
                  <img src={ele.img[0]} alt={ele.title} />
                  <div>
                    <h5>
                      Price starts from <br /> ₹{ele.price}
                    </h5>
                    <Link to={`/features/${ele.id}`}>FEATURES</Link>
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
      <Footer />
    </div>
  );
};

export default AllProducts;
