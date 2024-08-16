import React, { useState } from "react";
import Navbar from "../../components/adminNavbar/dashboardNavbar";
import CustomerCard from "../../components/customersCard/CustomerCard";
import "./Customers.scss";

const customersData = [
  { id: 1, name: "Abebe B", email: "abebeb@gmail.com", isDisabled: false },
  { id: 2, name: "Amir", email: "amir@gmail.com", isDisabled: false },
  // Add more customer data here
];

function Customers() {
  const [customers, setCustomers] = useState(customersData);

  const handleDelete = (customerId) => {
    const updatedCustomers = customers.filter(
      (customer) => customer.id !== customerId
    );
    setCustomers(updatedCustomers);
  };

  const handleDisable = (customerId) => {
    const updatedCustomers = customers.map((customer) =>
      customer.id === customerId
        ? { ...customer, isDisabled: !customer.isDisabled }
        : customer
    );
    setCustomers(updatedCustomers);
  };

  return (
    <div className="customers-page">
      <Navbar />
      <div className="customers-list">
        {customers.map((customer) => (
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
