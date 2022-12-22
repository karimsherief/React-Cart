import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="root-layout">
      <Navbar />
      <div className="container-fluid">
        {location.pathname === "/" ? <Navigate to="/products" /> : <Outlet />}
      </div>
    </div>
  );
};

export default RootLayout;
