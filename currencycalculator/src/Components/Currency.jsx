import React, { useEffect, useState } from 'react';
import "./currency.css";
import axios from 'axios';

const Currency = () => {
    const [amount, setAmount] = useState(1);
    const [fromCur, setFromCur] = useState("USD");
    const [toCur, setToCur] = useState("INR");
    const [calculatedCurrency, setCalculatedCurrency] = useState(null);
    const [lastUpdated, setLastUpdated] = useState(null);

    useEffect(() => {
        const getExchangeRate = async () => {
            try {
                const url = `https://api.exchangerate-api.com/v4/latest/${fromCur}`;
                const response = await axios.get(url);

                const curPrice = response.data.rates[toCur];
                if (curPrice) {
                    setCalculatedCurrency((curPrice * amount).toFixed(2));
                }

                // Convert the UNIX timestamp to a human-readable date and time
                const lastUpdatedTimestamp = response.data.time_last_updated;
                const lastUpdatedDate = new Date(lastUpdatedTimestamp * 1000).toLocaleString();
                setLastUpdated(lastUpdatedDate);
            } catch (err) {
                console.error("Error fetching exchange rates:", err);
            }
        };

        getExchangeRate();
    }, [amount, fromCur, toCur]);

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        setAmount(value);
    };

    return (
        <div className="converter-container">
            <h1>Currency Converter</h1>
            <form id="currency-form">
                <div className="form-group">
                    <label htmlFor="amount">Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Enter amount"
                        required
                        value={amount}
                        onChange={handleAmountChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="from-currency">From:</label>
                    <select
                        id="from-currency"
                        value={fromCur}
                        onChange={(e) => setFromCur(e.target.value)}
                    >
                        <option value="USD">United States - USD</option>
                        <option value="EUR">European Union - EUR</option>
                        <option value="JPY">Japan - JPY</option>
                        <option value="GBP">United Kingdom - GBP</option>
                        <option value="AUD">Australia - AUD</option>
                        <option value="CAD">Canada - CAD</option>
                        <option value="CHF">Switzerland - CHF</option>
                        <option value="CNY">China - CNY</option>
                        <option value="INR">India - INR</option>
                        <option value="RUB">Russia - RUB</option>
                        <option value="BRL">Brazil - BRL</option>
                        <option value="ZAR">South Africa - ZAR</option>
                        <option value="MXN">Mexico - MXN</option>
                        <option value="KRW">South Korea - KRW</option>
                        <option value="SAR">Saudi Arabia - SAR</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="to-currency">To:</label>
                    <select
                        id="to-currency"
                        value={toCur}
                        onChange={(e) => setToCur(e.target.value)}
                    >
                        <option value="INR">India - INR</option>
                        <option value="EUR">European Union - EUR</option>
                        <option value="JPY">Japan - JPY</option>
                        <option value="GBP">United Kingdom - GBP</option>
                        <option value="AUD">Australia - AUD</option>
                        <option value="CAD">Canada - CAD</option>
                        <option value="CHF">Switzerland - CHF</option>
                        <option value="CNY">China - CNY</option>
                        <option value="USD">United States - USD</option>
                        <option value="RUB">Russia - RUB</option>
                        <option value="BRL">Brazil - BRL</option>
                        <option value="ZAR">South Africa - ZAR</option>
                        <option value="MXN">Mexico - MXN</option>
                        <option value="KRW">South Korea - KRW</option>
                        <option value="SAR">Saudi Arabia - SAR</option>
                    </select>
                </div>
            </form>
            <p className='amount'>
                {fromCur} {amount} is equal to {calculatedCurrency ? calculatedCurrency : "calculating..."} {toCur}
            </p>
            {lastUpdated && <p>Last updated: {lastUpdated}</p>}
        </div>
    );
};

export default Currency;
