import "./purchasePage.scss";
import { useLocation } from 'react-router-dom';

function PurchasePage() {
  const location = useLocation();
  const { property } = location.state || {}; // Get the passed property details

  if (!property) {
    return <div>No property details available</div>;
  }

  const housePrice = property.price;
  const taxAmount = housePrice * 0.20;
  const commissionAmount = housePrice * 0.02;
  const totalPrice = housePrice + commissionAmount + taxAmount;

  return (
    <div className="purchasePage">
      <div className="container">
        <h1>Purchase Property</h1>
        <div className="propertyDetails">
          <div className="detail">
            <span className="label">House Price:</span>
            <span className="value">Birr {housePrice.toLocaleString()}</span>
          </div>
          <div className="detail">
            <span className="label">Tax Amount (20%):</span>
            <span className="value">Birr {taxAmount.toLocaleString()}</span>
          </div>
          <div className="detail">
            <span className="label">Commission (2%):</span>
            <span className="value">Birr {commissionAmount.toLocaleString()}</span>
          </div>
          <div className="detail">
            <span className="label">Total Price:</span>
            <span className="value">Birr {totalPrice.toLocaleString()}</span>
          </div>
        </div>
        <button className="purchaseNowButton">
          Purchase Now
        </button>
      </div>
    </div>
  );
}

export default PurchasePage;
