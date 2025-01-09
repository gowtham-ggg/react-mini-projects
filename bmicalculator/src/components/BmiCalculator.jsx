import React, { useState } from 'react';

const BmiCalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");
    const [errorValue, setError] = useState("");

    const handleClick = () => {
        setError(""); // Clear previous error
        if (height > 0 && weight > 0) {
            let heightInMeter = height / 100;
            let calculatedBmi = weight / (heightInMeter * heightInMeter);
            setBmi(calculatedBmi.toFixed(2)); // Limit to 2 decimal places

            if (calculatedBmi < 18.5) {
                setStatus("Underweight");
            } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
                setStatus("Normal weight");
            } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
                setStatus("Overweight");
            } else {
                setStatus("Obesity");
            }
        } else {
            if (!height) {
                setError("Enter a valid height.");
            } else {
                setError("Enter a valid weight.");
            }
        }
    };

    // Function to determine text color based on weight condition
    const getStatusColor = () => {
        switch (status) {
            case "Underweight":
                return "orangered";
            case "Normal weight":
                return "green";
            case "Overweight":
                return "orange";
            case "Obesity":
                return "red";
            default:
                return "black"; // Default color
        }
    };

    return (
        <div className="main">
            <div className="image"></div>
            <div className="content">
                <h1>BMI Calculator</h1>
                <p className="error">{errorValue}</p>
                <label htmlFor="height">Height in cm:</label>
                <input
                    type="number"
                    name="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />

                <label htmlFor="weight">Weight in kg:</label>
                <input
                    type="number"
                    name="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />

                <button onClick={handleClick}>CALCULATE</button>
                {bmi && (
                    <div className="display">
                        <h4>Your BMI is: {bmi}</h4>
                        <p style={{ color: getStatusColor() }}>Weight Condition: {status}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BmiCalculator;
