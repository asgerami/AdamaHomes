import React from "react";
import Navbar from "../../components/adminNavbar/dashboardNavbar";
import "./Properties.scss";
import { listData } from "../../lib/dummydata";
import AdminCard from "../../components/adminCard/AdminCard";

function Properties() {
  return (
    <div className="properties-page">
      <Navbar />
      <div className="list">
        {listData.map((item) => (
          <AdminCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Properties;
