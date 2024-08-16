import React from "react";
import Navbar from "../../components/adminNavbar/dashboardNavbar";
import CustomerCard from "../../components/customersCard/CustomerCard";
import "./Customers.scss";

const customersData = [
  { id: 1, name: "John Doe", email: "john@example.com", isDisabled: false },
  { id: 2, name: "Jane Smith", email: "jane@example.com", isDisabled: true },
  // Add more customer data here
];

function Customers() {
  const handleDelete = (customerId) => {
    // Logic to delete a customer
  };

  const handleDisable = (customerId) => {
    // Logic to disable a customer
  };

  return (
    <div className="customers-page">
      <Navbar />
      <div className="customers-list">
        {customersData.map((customer) => (
          <CustomerCard
            key={customer.id}
            customer={customer}
            onDelete={handleDelete}
            onDisable={handleDisable}
          />
        ))}
      </div>
    </div>
  );
}

export default Customers;
