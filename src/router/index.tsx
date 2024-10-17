import { createBrowserRouter } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  Layout,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: < HomePage />,
      },
    ],
  },
]);

export default router;
