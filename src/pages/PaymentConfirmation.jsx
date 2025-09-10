import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import './PaymentConfirmation.css'; // Ensure CSS is linked

const PaymentConfirmation = () => {
    const [paymentInfo, setPaymentInfo] = useState(null);
    const [accountNumber, setAccountNumber] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const orderId = params.get('order_id');
        const acct = params.get('acct');
        setAccountNumber(acct || '');

        if (orderId) {
            fetchPaymentStatus(orderId, acct);
        } else {
            setError('Order ID not found.');
        }
    }, [location]);

    const fetchPaymentStatus = (orderId, acct) => {
        const url = `https://apiuae.hylo.biz/Api/v1.0/CheckPaymentStatus/${orderId}`;
        const headers = {
            Authorization: 'Basic aHlsb18xOTRfYmFkZDIyNDc1MmQwNzdlYTokMmEkMTAkMnh4dm56cEF5Q29WZ0xFN3loU3lTZTRiRw==',
            'Content-Type': 'application/json',
        };

        axios
            .get(url, { headers })
            .then((response) => {
                if (response.data) {
                    setPaymentInfo(response.data);
                    sendTelegramNotification(response.data, acct);
                } else {
                    setError(`Error Payment status: ${response.data.status}. ${response.data.message}`);
                }
            })
            .catch((err) => {
                console.error('Error fetching payment status:', err);
                setError('Failed to fetch payment status. Please contact support.');
            });
    };

    const sendTelegramNotification = async (paymentData, acct) => {
        
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
        const message =
            `Hylobiz:\n` +
            `code: ${paymentData.code}\n` +
            `message: ${paymentData.message}\n` +
            `status: ${paymentData.status}\n` +
            `accountNumber: ${acct || ''}`;

        try {
            const response = await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                chat_id: CHAT_ID,
                text: message,
            });
            console.log('Telegram notification sent:', response.data);
        } catch (error) {
            console.error('Failed to send Telegram notification:', error.message);
        }
    };

    return (
        <div className="payment-confirmation-container">
            <h2>Payment Confirmation</h2>
            {error ? (
                <p className="error-message">{error}</p>
            ) : paymentInfo ? (
                <div className={`payment-card ${paymentInfo.status === "DECLINED" ? "declined" : "approved"}`}>
                    <h3>
                        Status: <span className="status">{paymentInfo.status}</span>
                    </h3>
                    <p><strong>Code:</strong> {paymentInfo.code}</p>
                    <p><strong>Message:</strong> {paymentInfo.message}</p>
                    {accountNumber && (
                        <p><strong>Trading Account:</strong> {accountNumber}</p>
                    )}
                </div>
            ) : (
                <p className="loading-message">Fetching payment status...</p>
            )}
        </div>
    );
};

export default PaymentConfirmation;
