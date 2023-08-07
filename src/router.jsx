import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductInfo from "./components/productInfo/ProductInfo";
import AllProducts from "./components/allProducts/AllProducts";
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
]);

export default router;
