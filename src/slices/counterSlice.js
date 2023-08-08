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
import chair1 from "../images/featured/chair1.jpg";
import chair2 from "../images/featured/chair2.jpg";
import chair3 from "../images/featured/chair3.jpg";
import bookshelve1 from "../images/featured/bookshelves1.jpg";
import bookshelve2 from "../images/featured/bookshelves2.jpg";
import bookshelve3 from "../images/featured/bookshelves3.jpg";
import gardenfurniture1 from "../images/featured/gardenfurniture1.jpg";
import gardenfurniture2 from "../images/featured/gardenfurniture2.jpg";
import gardenfurniture3 from "../images/featured/gardenfurniture3.jpg";
import recliner1 from "../images/featured/recliner1.jpg";
import recliner2 from "../images/featured/recliner2.jpg";
import recliner3 from "../images/featured/recliner3.jpg";
import desk1 from "../images/featured/desk1.jpg";
import desk2 from "../images/featured/desk2.jpg";
import desk3 from "../images/featured/desk3.jpg";
import bech1 from "../images/featured/bench1.jpg";
import bech2 from "../images/featured/bench2.jpg";
import bech3 from "../images/featured/bench3.jpg";

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
        price: 1000,
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
      {
        id: "chair",
        title: "Chair",
        price: 2000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [chair1, chair3, chair2],
      },
      {
        id: "bookshelve",
        title: "Bookshelve",
        price: 5000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [bookshelve1, bookshelve3, bookshelve2],
      },
      {
        id: "garden-furniture",
        title: "Garden Furniture",
        price: 15000,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [gardenfurniture1, gardenfurniture2, gardenfurniture3],
      },
      {
        id: "recliner",
        title: "Recliner",
        price: 3500,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [recliner1, recliner2, recliner3],
      },
      {
        id: "desk",
        title: "Desk",
        price: 1300,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [desk1, desk2, desk3],
      },
      {
        id: "bench",
        title: "Bench",
        price: 1300,
        details:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe ut in reprehenderit velit commodi a illo iure, quasi accusantium nulla veritatis reiciendis soluta tenetur libero natus alias quidem assumenda!",
        img: [bech1, bech2, bech3],
      },
    ],
  },

  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
