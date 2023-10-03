import { Outlet, useLocation, useParams } from "react-router-dom";
import Footer from "./components/Footer";
import { QueryStringProvider } from "./contexts/QueryStringContext.tsx";
import { FavorProvider } from "./contexts/FavorContext.tsx";
import { useEffect } from "react";

type Props = {};

const App = ({}: Props) => {
  const { pathname } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    const pages = [
      { id: 0, path: "/", title: "Movie Search" },
      { id: 1, path: "/search", title: "Search" },
      { id: 2, path: `/detail/${id}`, title: "Detail" },
      { id: 3, path: "/favor", title: "Favor" },
    ];

    document.title =
      pages.find((p) => p.path === pathname)?.title || "Movie Search";
  }, [pathname]);

  return (
    <FavorProvider>
      <QueryStringProvider>
        <Outlet />
        <Footer />
      </QueryStringProvider>
    </FavorProvider>
  );
};

export default App;
