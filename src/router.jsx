import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const App = React.lazy(() => import("./App"));
// import App from "./App";
const ProductInfo = React.lazy(() =>
  import("./components/productInfo/ProductInfo")
);
// import ProductInfo from "./components/productInfo/ProductInfo";
const AllProducts = React.lazy(() =>
  import("./components/allProducts/AllProducts")
);
// import AllProducts from "./components/allProducts/AllProducts";
const Gallery = React.lazy(() => import("./components/gallery/Gallery"));
// import Gallery from "./components/gallery/Gallery";
const Contact = React.lazy(() => import("./components/contact/Contact"));
// import Contact from "./components/contact/Contact";
import Loading from "./components/loading/Loading";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    ),
  },
  {
    path: "/features/:id",
    element: (
      <Suspense fallback={<Loading />}>
        <ProductInfo />
      </Suspense>
    ),
  },
  {
    path: "/products",
    element: (
      <Suspense fallback={<Loading />}>
        <AllProducts />
      </Suspense>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Suspense fallback={<Loading />}>
        <Gallery />
      </Suspense>
    ),
  },
  {
    path: "/contact-us",
    element: (
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    ),
  },
]);

export default router;
