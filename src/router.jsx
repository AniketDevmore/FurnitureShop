import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ProductInfo from "./components/productInfo/ProductInfo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/features/:id",
    element: <ProductInfo />,
  },
]);

export default router;
