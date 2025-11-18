import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { Routes } from "./routes.js";
import LandingPage from "../pages/LandingPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ChatPage from "../pages/ChatPage.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";


const router = createBrowserRouter([
  {
    index: true,
    path: Routes.Root,
    Component: LandingPage,
  },
  {
    Component: ProtectedRoute,
    children: [
      {
        path: Routes.Chat,
        Component: ChatPage
      }
    ]
  },
  {
    path: Routes.Auth,
    children: [
      {
        index: true,
        element: <Navigate to={Routes.Login} replace />,
      },
      {
        path: Routes.Login.replace(Routes.Auth + "/", ""),
        Component: LoginPage,
      }
    ],
  },
  {
    path: Routes.Unknow,
    Component: NotFoundPage,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
