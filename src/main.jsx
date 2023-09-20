import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./css/style.css";
import { Root } from "./pages/Root";
import { CreateRecipe } from "./pages/CreateRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "create-recipe",
    element: <CreateRecipe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
