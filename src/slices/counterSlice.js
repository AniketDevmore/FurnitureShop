import { createSlice } from "@reduxjs/toolkit";
import doubleBed1 from "../images/featured/doubleBed1.jpg";
import doubleBed2 from "../images/featured/doubleBed2.jpg";
import doubleBed3 from "../images/featured/doubleBed3.jpg";
import couch1 from "../images/featured/couch1.jpg";
import couch2 from "../images/featured/couch2.jpg";
import couch3 from "../images/featured/couch3.jpg";
import digning1 from "../images/featured/digning1.jpg";
import digning2 from "../images/featured/digning2.jpg";
import digning3 from "../images/featured/digning3.jpg";
import beanbag1 from "../images/featured/bean-bag1.jpg";
import beanbag2 from "../images/featured/bean-bag2.jpg";
import beanbag3 from "../images/featured/bean-bag3.jpg";
import singlebed1 from "../images/featured/single-bed1.jpg";
import singlebed2 from "../images/featured/single-bed2.jpg";
import singlebed3 from "../images/featured/single-bed3.jpg";
import dressingtable1 from "../images/featured/dressing-table1.jpg";
import dressingtable2 from "../images/featured/dressing-table2.jpg";
import dressingtable3 from "../images/featured/dressing-table3.jpg";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    featuredProduct: [
      {
        id: "double-bed",
        title: "Double Bed",
        price: 10000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [doubleBed1, doubleBed2, doubleBed3],
      },
      {
        id: "couch",
        title: "Couch",
        price: 14000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [couch1, couch2, couch3],
      },
      {
        id: "digning-table",
        title: "Digning Table",
        price: 12000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [digning1, digning2, digning3],
      },
    ],
    products: [
      {
        id: "double-bed",
        title: "Double Bed",
        price: 10000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [doubleBed3, doubleBed1, doubleBed2],
      },
      {
        id: "couch",
        title: "Couch",
        price: 14000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [couch1, couch2, couch3],
      },
      {
        id: "digning-table",
        title: "Digning Table",
        price: 12000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [digning2, digning1, digning3],
      },
      {
        id: "bean-bag",
        title: "Bean Bag",
        price: 2000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [beanbag1, beanbag2, beanbag3],
      },
      {
        id: "single-bed",
        title: "Single Bed",
        price: 8000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [singlebed2, singlebed1, singlebed3],
      },
      {
        id: "dressing-table",
        title: "Dressing Table",
        price: 9000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [dressingtable1, dressingtable2, dressingtable3],
      },
    ],
  },

  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
