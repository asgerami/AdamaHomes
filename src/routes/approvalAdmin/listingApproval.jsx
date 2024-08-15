import React from "react";
import Navbar from "../../components/adminNavbar/dashboardNavbar";
import "./listingApproval.scss";
import { listData } from "../../lib/dummydata";
import ApprovalCard from "../../components/approvalCard/ApprovalCard";

function ListingApproval() {
  return (
    <div className="properties-page">
      <Navbar />
      <div className="list">
        {listData.map((item) => (
          <ApprovalCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ListingApproval;
