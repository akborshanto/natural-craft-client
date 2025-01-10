import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root/Root.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Ragister from "./Pages/Ragister.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Additem from "./Pages/Additem.jsx";
import AllCraftItems from "./Pages/AllCraftItems.jsx";
import MyCraftItem from "./Pages/MyCraftItem.jsx";
import PrivateRoute from "./Private/PrivateRoute.jsx";
import Deatails from "./Pages/Deatails.jsx";
import UpdataePage from "./Pages/UpdataePage.jsx";
import Category from "./Pages/Category.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import ReduxLearning from "./Pages/ReduxLearning.jsx";
import ReduxObject from "./Pages/ReduxObject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://project-10-server-topaz.vercel.app/craftItems"),
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Ragister />,
      },
      {
        path: "/redux",
        element: <ReduxLearning />,
      },
      {
        path: "/Obj",
        element: <ReduxObject />,
      },
      {
        path: "/craftItems/:id",
        loader: ({ params }) =>
          fetch(
            `https://project-10-server-topaz.vercel.app/craftItems/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Deatails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(
            `https://project-10-server-topaz.vercel.app/craftItems/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdataePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/addcraftitem",
        element: (
          <PrivateRoute>
            <Additem />
          </PrivateRoute>
        ),
      },
      {
        path: "/category/:subcategory_name",
        loader: ({ params }) =>
          fetch(
            `https://project-10-server-topaz.vercel.app/category/${params.subcategory_name}`
          ),
        element: <Category />,
      },
      {
        path: "/allcraftitems",
        loader: () =>
          fetch("https://project-10-server-topaz.vercel.app/craftItems"),
        element: <AllCraftItems />,
      },
      {
        path: "/mycraftitem",
        loader: () =>
          fetch("https://project-10-server-topaz.vercel.app/craftItems"),
        element: (
          <PrivateRoute>
            <MyCraftItem />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
