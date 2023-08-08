import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductInfo from "./components/productInfo/ProductInfo";
import AllProducts from "./components/allProducts/AllProducts";
import Glimpse from "./components/glimpse/Glimpse";
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
    path: "/glimpse",
    element: <Glimpse />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

export default router;
