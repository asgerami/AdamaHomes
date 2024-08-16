import HomePage from "./routes/homePage/homePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import NewPostPage from "./routes/newPostPage/newPostPage";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import VerifyCode from "./routes/verifyCode/VerifyCode";
import ResetPassword from "./routes/resetPassword/ResetPassword";
import ForgotPassword from "./routes/forgetPassword/forgotPassword";
import Dashboard from "./routes/dashboard/Dashboard";
import Properties from "./routes/propertiesAdmin/Properties";
import ListingApproval from "./routes/approvalAdmin/listingApproval";
import Customers from "./routes/customers/Customers";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/newpost",
          element: <NewPostPage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
        {
          path: "/profileupdate",
          element: <ProfileUpdatePage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/properties",
          element: <Properties />
        },
        {
          path: "/listingapproval",
          element: <ListingApproval />
        },
        {
          path: "/customers",
          element: <Customers />
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/verify-code",
      element: <VerifyCode />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
