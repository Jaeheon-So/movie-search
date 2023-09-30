import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { QueryStringProvider } from "./contexts/QueryStringContext.tsx";

// 1 ~ 10 수정
// 로딩 추가 -> 스켈레톤 ui 사용
// 페이지네이션
// list count -> 할지 말지 고민
// 디바운스 -> 아마도 성공 경과 지켜바
// 관심상품
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
