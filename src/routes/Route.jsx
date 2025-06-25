// Main route file for the application
// This file defines the routes for the application using React Router

import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Billing from "../pages/Billing/Billing";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import SingleBill from "../pages/BillDetails/SingleBill";
import Profile from "../pages/Profile/Profile";
import Profile_Update from "../pages/UpdateProfile/Profile_update";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/profile/edit',
        element: (
          <PrivateRoute>
            <Profile_Update />
          </PrivateRoute>
        )
      },
      {
        path: '/billing',
        element: (
          <PrivateRoute>
            <Billing />
          </PrivateRoute>
        )
      },
      
      {
        path: '/profile',
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        )
      },
      {
        path: "/billing/:id",
        element: (
          <PrivateRoute>
            <SingleBill />
          </PrivateRoute>
        ),
      },
      {
        path: '/signin',
        Component: SignIn,
      }
      ,
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/forgot-password',
        Component: ForgotPassword,
      }
    ],
  },
]);
