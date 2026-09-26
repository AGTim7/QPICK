import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import CatalogPage from "../pages/CatalogPage";
import CartPage from "../pages/CartPage";
import FavoritesPage from "../pages/FavoritesPage";

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
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
    ],
  },
]);