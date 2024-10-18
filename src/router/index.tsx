import { createBrowserRouter } from "react-router-dom";
import { HomePage, LandingPage, CoursePage, Layout, MentorshipPage } from "../pages";

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
        element: <HomePage />,
      },
      {
        path: "/mentorship",
        element: <MentorshipPage />,
      },
      { 
        path: "/courses/:id", 
        element: <CoursePage /> 
      },
    ],
  },
]);

export default router;
