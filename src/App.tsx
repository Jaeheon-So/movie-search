import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

type Props = {};

const App = ({}: Props) => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
