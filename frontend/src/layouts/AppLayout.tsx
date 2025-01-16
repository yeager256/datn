import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col w-full  min-h-[100vh]">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
