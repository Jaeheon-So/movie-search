import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Seach from "./pages/Seach";
import Detail from "./pages/Detail";
import Favor from "./pages/Favor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Seach />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/favor",
        element: <Favor />,
      },
    ],
  },
]);

export default router;
