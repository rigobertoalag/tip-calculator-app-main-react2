import React, { useState, useEffect } from "react";
import "./Bill.scss";
import dolar from "../../images/icon-dollar.svg";
import person from "../../images/icon-person.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  setTipAmount,
  setTipTotal,
  resetData,
} from "../../features/tip/tipSlice";

const BillComponent = () => {
  const isReset = useSelector((state) => state.tip.reset);
  const dispatch = useDispatch();

  const [reset, setReset] = useState(isReset);

  useEffect(() => {
    setReset(true);
    if (reset) {
      setTip();
      setErrors({
        bill: {
          status: false,
          message: "",
        },
        people: {
          status: false,
          message: "",
        },
      });
      setBillInput({ value: "", status: false });
      setPeopleInput({ value: "", status: false });
      setCustomInput({ value: "", status: false });
      dispatch(resetData(false));
      dispatch(setTipAmount(0));
      dispatch(setTipTotal(0));
    }
  }, [isReset]);

  const [tip, setTip] = useState();
  const [errors, setErrors] = useState({
    bill: {
      status: false,
      message: "",
    },
    people: {
      status: false,
      message: "",
    },
  });
  const [billInput, setBillInput] = useState({
    value: "",
    status: false,
  });
  const [peopleInput, setPeopleInput] = useState({
    value: "",
    status: false,
  });
  const [customInput, setCustomInput] = useState({
    value: "",
    status: false,
  });

  const HandleErrors = (bill, people) => {
    if (bill && people) {
      if (bill <= 0 && people <= 0) {
        setErrors({
          bill: { status: true, message: "Can't be zero" },
          people: { status: true, message: "Can't be zero" },
        });
        setTip(false);
      } else if (bill > 0 && people <= 0) {
        setErrors({
          bill: { status: false, message: "" },
          people: { status: true, message: "Can't be zero" },
        });
        setTip(false);
      } else if (bill <= 0 && people > 0) {
        setErrors({
          bill: { status: true, message: "Can't be zero" },
          people: { status: false, message: "" },
        });
        setTip(false);
      } else {
        setErrors({
          bill: { status: false, message: "" },
          people: { status: false, message: "" },
        });
      }
    } else if (bill && !people) {
      setErrors({
        bill: { status: false, message: "" },
        people: { status: true, message: "Can't be empty" },
      });
      setTip(false);
    } else if (!bill && people) {
      setErrors({
        bill: { status: true, message: "Can't be empty" },
        people: { status: false, message: "" },
      });
      setTip(false);
    } else {
      setErrors({
        bill: { status: true, message: "Can't be empty" },
        people: { status: true, message: "Can't be empty" },
      });
      setTip(false);
    }
  };

  const calculateTip = () => {
    if (billInput.value && peopleInput.value) {
      const billDiv = billInput.value / peopleInput.value;

      if (customInput.value <= 0) {
        const tipPerPerson = billDiv * tip;
        const tipTotal = billInput.value * tip;

        dispatch(setTipAmount(tipPerPerson));
        dispatch(setTipTotal(tipTotal));
      } else if (customInput.value > 0) {
        const tipPerPerson = billDiv * (customInput.value / 100);
        const tipTotal = billInput.value * (customInput.value / 100);

        if (tipPerPerson && tipTotal) {
          dispatch(setTipAmount(tipPerPerson));
          dispatch(setTipTotal(tipTotal));
        }
      }
    }
  };

  return (
    <div className="bill-container">
      {tip && billInput.value && peopleInput.value
        ? calculateTip()
        : customInput.value && billInput.value && peopleInput.value
        ? calculateTip()
        : ""}
      <div className="b-title-container">
        <p className="b-title">Bill</p>
        {errors.bill.message ? (
          <p className="b-title title-error">{errors.bill.message}</p>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          billInput.status && billInput.value > 0
            ? "bill-input active"
            : errors.bill.status
            ? "bill-input error"
            : "bill-input"
        }
        onClick={() => setBillInput({ status: true })}
      >
        <img src={dolar} alt="dolar" />
        <input
          type="number"
          placeholder="0"
          onChange={(e) =>
            setBillInput({ value: e.target.value, status: true })
          }
          value={billInput.value}
          className={billInput ? "b-input active-i" : "b-input"}
        />
      </div>

      <p className="b-title">Select Tip %</p>
      <div className="bill-select-tip">
        <button
          className={tip === 0.05 ? "bill-tip-btn active-btn" : "bill-tip-btn"}
          onClick={() => [
            setTip(0.05),
            HandleErrors(billInput.value, peopleInput.value),
          ]}
        >
          5%
        </button>
        <button
          className={tip === 0.1 ? "bill-tip-btn active-btn" : "bill-tip-btn"}
          onClick={() => [
            setTip(0.1),
            HandleErrors(billInput.value, peopleInput.value),
          ]}
        >
          10%
        </button>
        <button
          className={tip === 0.15 ? "bill-tip-btn active-btn" : "bill-tip-btn"}
          onClick={() => [
            setTip(0.15),
            HandleErrors(billInput.value, peopleInput.value),
          ]}
        >
          15%
        </button>
        <button
          className={tip === 0.25 ? "bill-tip-btn active-btn" : "bill-tip-btn"}
          onClick={() => [
            setTip(0.25),
            HandleErrors(billInput.value, peopleInput.value),
          ]}
        >
          25%
        </button>
        <button
          className={tip === 0.5 ? "bill-tip-btn active-btn" : "bill-tip-btn"}
          onClick={() => [
            setTip(0.5),
            HandleErrors(billInput.value, peopleInput.value),
          ]}
        >
          50%
        </button>
        {customInput.status ? (
          <input
            type="number"
            value={customInput.value}
            placeholder="0"
            className="b-input active-i"
            onChange={(e) =>
              [setCustomInput({ value: e.target.value, status: true }), setTip(e.target.value)]
            }
          />
        ) : (
          <button
            className="bill-tip-btn tip-custom"
            onClick={() => setCustomInput({ status: true })}
          >
            Custom
          </button>
        )}
      </div>

      <div className="b-title-container">
        <p className="b-title">Number of people</p>
        {errors.people.message ? (
          <p className="b-title title-error">{errors.people.message}</p>
        ) : (
          ""
        )}
      </div>
      <div
        className={
          peopleInput.status && peopleInput.value > 0
            ? "bill-input active"
            : errors.people.status
            ? "bill-input error"
            : "bill-input"
        }
        onClick={() => setPeopleInput({ status: true })}
      >
        <img src={person} alt="person" />
        <input
          type="number"
          placeholder="0"
          onChange={(e) =>
            setPeopleInput({ value: e.target.value, status: true })
          }
          className={peopleInput ? "b-input active-i" : "b-input"}
          value={peopleInput.value}
        />
      </div>
    </div>
  );
};

export default BillComponent;
