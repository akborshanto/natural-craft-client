import { Outlet, useLocation } from "react-router-dom";
import Navber from "../../Components/Navber";
import { Toaster } from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";
import { Tooltip } from "react-tooltip";

const Root = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div className="Montserrat dark:bg-[#322C2B] min-h-screen  duration-500  ">
      <Toaster position="top-center" reverseOrder={false} />
      <Tooltip id="my-tooltip" />
      {location.pathname !== "/" && <Navber />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
