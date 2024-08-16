import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

function adminNavbar() {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>Adama Homes</span>
        </a>
        <a href="/dashboard">Dashboard</a>
        <a href="/properties">Properties</a>
        <a href="/listingapproval">Listing Approval</a>
        <a href="/customers">Customers</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user"></div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="./routes/register/register.jsx" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/dashboard">Dashboard</a>
          <a href="/properties">Properties</a>
          <a href="/listingapproval">Listing Approval</a>
          <a href="/customers">Customers</a>
          <a href="/login">SignOut</a>
        </div>
      </div>
    </nav>
  );
}

export default adminNavbar;
