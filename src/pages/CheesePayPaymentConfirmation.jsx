import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PaymentConfirmation() {
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [tradeNo, setTradeNo] = useState('');
  const [accountNumber, setAccountNumber] = useState('');

  const BACKEND_URL = import.meta.env.VITE_FASTONE_API;
  const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const acct = searchParams.get("acct");
    const storedTradeNo = localStorage.getItem("cheese_trade_no");

    if (!storedTradeNo) {
      setError("No tradeNo found in local storage.");
      setLoading(false);
      return;
    }

    setAccountNumber(acct || "");
    setTradeNo(storedTradeNo);

    checkPaymentStatus(storedTradeNo, acct);
  }, []);

  const checkPaymentStatus = async (tn, acct) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/api/confirm-payment`, {
        tradeNo: tn,
      });

      const data = res.data;

      if (data.success) {
        setPaymentInfo(data);
        sendTelegramNotification(data, tn, acct);
      } else {
        setError(data.error || "Payment verification failed.");
      }
    } catch (err) {
      setError("Error verifying payment status.");
      console.error("Payment verification error:", err);
    } finally {
      setLoading(false);
    }
  };

  const sendTelegramNotification = async (data, tn, acct) => {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.warn('Telegram bot token or chat ID not set.');
      return;
    }

    const message = `
CheesePay:
Payment Status: ${data.paymentStatus === 1 ? 'Success' : 'Failed or Pending'}
Trade No: ${tn}
Amount: ₹${data.payAmount || "N/A"}
Payment Finish Time: ${data.paymentFinishTime || "N/A"}
Trading Account: ${acct || "N/A"}
    `;

    try {
      const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
      });
      console.log('Telegram notification sent:', response.data);
    } catch (error) {
      console.error('Failed to send Telegram notification:', error.message);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Payment Confirmation</h2>
      {loading && <p style={styles.loading}>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}

      {tradeNo && (
        <p style={styles.tradeNo}>
          <strong>Trade No:</strong> {tradeNo}
        </p>
      )}

      {accountNumber && (
        <p style={styles.tradeNo}>
          <strong>Trading Account:</strong> {accountNumber}
        </p>
      )}

      {paymentInfo && (
        <div style={styles.paymentInfoContainer}>
          <div style={styles.infoRow}>
            <p>
              <strong>Payment Status:</strong>{' '}
              {paymentInfo.paymentStatus === 1 ? 'Success' : 'Failed or Pending'}
            </p>
          </div>
          <div style={styles.infoRow}>
            <p>
              <strong>Pay Amount:</strong> ₹{paymentInfo.payAmount || 'N/A'}
            </p>
          </div>
          <div style={styles.infoRow}>
            <p>
              <strong>Payment Finish Time:</strong>{' '}
              {paymentInfo.paymentFinishTime || 'N/A'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f8f9fa',
    padding: '40px',
    maxWidth: '600px',
    margin: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#007bff',
  },
  loading: {
    textAlign: 'center',
    color: '#6c757d',
  },
  error: {
    textAlign: 'center',
    color: '#dc3545',
    fontWeight: 'bold',
  },
  tradeNo: {
    textAlign: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paymentInfoContainer: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  infoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    fontSize: '1rem',
    lineHeight: '1.5',
  },
};
