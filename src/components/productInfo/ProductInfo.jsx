import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const ProductInfo = () => {
  const id = useParams("id");
  console.log(id);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default ProductInfo;
