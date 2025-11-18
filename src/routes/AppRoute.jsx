import { createBrowserRouter, Navigate, RouterProvider} from "react-router";
import { Routes } from "./routes.js";
import LandingPage from "../pages/LandingPage.jsx";



const router = createBrowserRouter([
    {
        index: true,
        path: Routes.Root,
        Component: LandingPage
    }
])


export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
