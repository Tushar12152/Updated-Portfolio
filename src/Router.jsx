import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Landingpage from "./Components/Landingpage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
    },
    {
      path: "/",
      element: <Landingpage/>,
    },
  ]);

  export default router