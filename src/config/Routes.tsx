import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Details from "../pages/detail/Details";
import CustomErrorLayout from "../layouts/CustomErrorLayout";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/:category", element: <Catalog /> },
      { path: "/:category/search/:keyword", element: <Catalog /> },
      { path: "/:category/:id", element: <Details /> },
    ],
  },
  {
    path: "/error",
    element: <CustomErrorLayout />,
  },
  {
    path: "*",
    element: <CustomErrorLayout />,
  },
]);
