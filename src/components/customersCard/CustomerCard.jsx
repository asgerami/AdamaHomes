import React from "react";
import "./CustomerCard.scss";

function CustomerCard({ customer, onDelete, onDisable }) {
  return (
    <div className="customer-card">
      <div className="customer-info">
        <h2>{customer.name}</h2>
        <p>{customer.email}</p>
      </div>
      <div className="customer-actions">
        <button
          className="disable-btn"
          onClick={() => onDisable(customer.id)}
        >
          {customer.isDisabled ? "Enable" : "Disable"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(customer.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default CustomerCard;
