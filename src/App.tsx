import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

type Props = {};

const App = ({}: Props) => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
