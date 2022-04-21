import React from "react";
import "./Totals.scss";

const TotalsComponent = () => {
  return (
    <div className="tip-container">
      <div className="tip-main">
        <div className="tip-amount-container">
          <div className="tip-amount-label">
            <span className="tip-title">Tip amount</span>
            <span className="tip-subtitle">/ person</span>
          </div>

          <p className="tip-total">$0.00</p>
        </div>

        <div className="tip-amount-container">
          <div className="tip-amount-label">
            <span className="tip-title">Total</span>
            <span className="tip-subtitle">/ person</span>
          </div>

          <p className="tip-total">$0.00</p>
        </div>
      </div>

      <button className="reset-btn">RESET</button>
    </div>
  );
};

export default TotalsComponent;
