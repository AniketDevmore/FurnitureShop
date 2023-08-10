import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductInfo from "./components/productInfo/ProductInfo";
import AllProducts from "./components/allProducts/AllProducts";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/features/:id",
    element: <ProductInfo />,
  },
  {
    path: "/products",
    element: <AllProducts />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

export default router;
