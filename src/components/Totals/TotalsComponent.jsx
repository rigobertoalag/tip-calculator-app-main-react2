import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Totals.scss";
import { resetData } from "../../features/tip/tipSlice";

const TotalsComponent = () => {
  const dispatch = useDispatch();

  const tipAmount = useSelector((state) => state.tip.tipAmount);
  const tipTotal = useSelector((state) => state.tip.tipTotal);

  return (
    <div className="tip-container">
      <div className="tip-main">
        <div className="tip-amount-container">
          <div className="tip-amount-label">
            <span className="tip-title">Tip amount</span>
            <span className="tip-subtitle">/ person</span>
          </div>

          <p className="tip-total">${tipAmount.toFixed(2)}</p>
        </div>

        <div className="tip-amount-container">
          <div className="tip-amount-label">
            <span className="tip-title">Total</span>
            <span className="tip-subtitle">/ person</span>
          </div>

          <p className="tip-total">${tipTotal.toFixed(2)}</p>
        </div>
      </div>

      {tipAmount > 0 && tipTotal > 0 ? (
        <button className="reset-btn btn-active" onClick={() => dispatch(resetData(true))}>
          RESET
        </button>
      ) : (
        <button className="reset-btn btn-inactive " disabled>
          RESET
        </button>
      )}
    </div>
  );
};

export default TotalsComponent;
