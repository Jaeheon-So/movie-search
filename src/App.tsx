import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { QueryStringProvider } from "./contexts/QueryStringContext.tsx";

// 관심상품
// 최근 본 영화
// 최근 검색어
// 타입 0인거 누르면 안쏘게

type Props = {};

const App = ({}: Props) => {
  return (
    <QueryStringProvider>
      <Outlet />
      <Footer />
    </QueryStringProvider>
  );
};

export default App;
