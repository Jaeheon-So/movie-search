import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { QueryStringProvider } from "./contexts/QueryStringContext.tsx";

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
