import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import queryString from "query-string";
import "./DepositFund.css";

const DepositFund = () => {
  const [email, setEmail] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("hylobiz");

  const [cardLoading, setCardLoading] = useState(false);
  const [cardError, setCardError] = useState("");

  const [upiLoading, setUpiLoading] = useState(false);
  const [upiError, setUpiError] = useState("");

  const HYLO_TOKEN = import.meta.env.VITE_HYLO_TOKEN;
  const HYLO_API = import.meta.env.VITE_HYLO_API || "https://apiuae.hylo.biz/Api/v1.0/Payment";
  const HYLO_REDIRECT_BASE = import.meta.env.VITE_HYLO_REDIRECT_BASE || "https://fastoneglobalmarkets.co/payment-confirmation";

  useEffect(() => {
    const { method } = queryString.parse(window.location.search);
    if (method === "card") {
      setPaymentMethod("hylobiz");
    } else if (method === "bank") {
      setPaymentMethod("cheese");
    }
  }, []);

  const convertUSDToAED = (usdAmount) => (usdAmount * 3.68).toFixed(2);

  const generateOrderId = () => uuidv4().slice(0, 19);

  const getTomorrowDate = () => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    return t.toISOString().split("T")[0];
  };

  const handleCardPayment = async () => {
    setCardLoading(true);
    setCardError("");

    if (isNaN(amount) || amount <= 0 || !email) {
      setCardError("Please enter valid amount and email.");
      setCardLoading(false);
      return;
    }

    const aedAmount = convertUSDToAED(amount);
    const orderId = generateOrderId();
    const dueDate = getTomorrowDate();
    const redirectUrl = `${HYLO_REDIRECT_BASE}?order_id=${orderId}&acct=${accountNumber}`;

    const payload = {
      orderId,
      amount: aedAmount,
      customer_name: "Customer Name",
      customer_mobile: "9999999999",
      customer_email: email,
      currency: "AED",
      sms_notify: false,
      email_notify: false,
      partial_payment: true,
      redirect_url: redirectUrl,
      dueDate,
    };

    try {
      const response = await axios.post(HYLO_API, payload, {
        headers: {
          Authorization: `Basic ${HYLO_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      const url = response?.data?.short_url;
      if (url) {
        window.open(url, "_blank");
      } else {
        setCardError("Failed to generate payment link.");
      }
    } catch (err) {
      console.error("Card payment error:", err);
      setCardError(err?.response?.data?.message || "Request failed");
    }

    setCardLoading(false);
  };

  const handleCheesePay = async (mode = "P2P") => {
    setUpiLoading(true);
    setUpiError("");

    if (!amount || isNaN(amount) || amount <= 0 || !email) {
      setUpiError("Please enter valid amount and email.");
      setUpiLoading(false);
      return;
    }

    try {
      const response = await axios.post("/api/create-order", {
        amount,
        email,
        accountNumber,
        paymentMode: mode,
      });

      const { success, payUrl, tradeNo, error } = response.data;
      if (success && payUrl) {
        localStorage.setItem("cheese_trade_no", tradeNo);
        window.open(payUrl, "_blank");
      } else {
        setUpiError(error || "Failed to create payment");
      }
    } catch (err) {
      console.error("CheesePay error:", err);
      setUpiError(err?.response?.data?.error || "Request failed");
    }

    setUpiLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentMethod === "hylobiz") {
      handleCardPayment();
    } else if (paymentMethod === "bank") {
      handleCheesePay();
    }
  };

  return (
    <div className="deposit-page">
      <div className="deposit-card fade-in">
        <h2 className="deposit-title">Deposit Funds</h2>
        <p className="deposit-subtitle">
          Fast, secure, and reliable payment options to fund your account
        </p>

        <form onSubmit={handleSubmit} className="deposit-form">
          <div className="form-group">
            <label htmlFor="paymentMethod">Choose Payment Method</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="hylobiz">Card Payment (AED)</option>
              <option value="bank">UPI / Bank Transfer (INR)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="accountNumber">Trading Account Number</label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              required
              placeholder="Enter your trading account number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="amount">
              {paymentMethod === "hylobiz" ? "Amount in USD" : "Amount in INR"}
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
              placeholder={
                paymentMethod === "hylobiz" ? "e.g. 100 USD" : "Minimum ₹1000"
              }
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={cardLoading || upiLoading}
          >
            {cardLoading || upiLoading
              ? "Processing..."
              : paymentMethod === "hylobiz"
              ? "Proceed with Card Payment"
              : "Proceed with Bank Transfer/UPI"}
          </button>
        </form>

        {cardError && <p className="error-text">{cardError}</p>}
        {upiError && <p className="error-text">{upiError}</p>}
      </div>
    </div>
  );
};

export default DepositFund;
