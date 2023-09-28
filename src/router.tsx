import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Seach from "./pages/Seach";
import Detail from "./pages/Detail";

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
    ],
  },
]);

export default router;
