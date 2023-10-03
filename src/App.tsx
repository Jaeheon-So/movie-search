import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { QueryStringProvider } from "./contexts/QueryStringContext.tsx";
import { FavorProvider } from "./contexts/FavorContext.tsx";

// 최근 본 영화
// 최근 검색어

type Props = {};

const App = ({}: Props) => {
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
