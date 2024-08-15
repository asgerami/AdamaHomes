import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import adminNavbar from "../../components/adminNavbar/dashboardNavbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();
  const hideNavbarOnDashboard = location.pathname.includes("dashboard") || location.pathname.includes("properties") || location.pathname.includes("listingapproval");

  return (
    <div className="layout">
      <div className="navbar">
        {!hideNavbarOnDashboard ? <Navbar /> : <adminNavbar />}
        
      </div>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
}

export default Layout;
