import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);