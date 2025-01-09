import React, { useEffect, useState, useMemo } from 'react';
import clear_icon from "../Assets/clear.png";
import cloud_icon from "../Assets/cloud.png";
import drizzle_icon from "../Assets/drizzle.png";
import rain_icon from "../Assets/rain.png";
import snow_icon from "../Assets/snow.png";

const Display = ({ searchInput = "sathyamangalam" }) => {
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const [city, setCity] = useState("sathyamangalam");
  const [icon, setIcon] = useState(clear_icon);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");
  const [visibility, setVisibility] = useState("");
  const [feels, setFeels] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);

  const weatherIcon = useMemo(
    () => ({
      "01d": clear_icon,
      "01n": clear_icon,
      "02d": cloud_icon,
      "02n": cloud_icon,
      "03d": drizzle_icon,
      "03n": drizzle_icon,
      "04d": drizzle_icon,
      "04n": drizzle_icon,
      "09d": rain_icon,
      "09n": rain_icon,
      "10d": rain_icon,
      "10n": rain_icon,
      "13d": snow_icon,
      "13n": snow_icon,
    }),
    []
  );

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setCityNotFound(false);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=metric&appid=${apiKey}`
        );
        const data = await response.json();

        if (data.cod === "404") {
          setCityNotFound(true);
        } else {
          setCity(data.name);
          setTemp(data.main.temp);
          setVisibility((data.visibility / 1000).toFixed(1));
          setFeels(data.main.feels_like);
          setHumidity(data.main.humidity);
          setWindSpeed(data.wind.speed);
          setCondition(data.weather[0].description);
          setIcon(weatherIcon[data.weather[0].icon] || clear_icon);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [searchInput, apiKey, weatherIcon]);

  return (
    <>
      <div className="first-container">
        <img src={icon} alt="Weather condition" />
        <h3>
          {city} <br />
          <span className="date">{new Date().toLocaleString()}</span>
        </h3>
      </div>
      <div className="second-container">
        <div className="degree-container">
          <h1>
            {temp} <sup>°</sup>
          </h1>
          <h6>{condition}</h6>
        </div>
      </div>
      <div className="third-container">
        <div className="first-sub-container">
          <h3>Visibility: {visibility} km</h3>
          <h3>Feels like: {feels}°C</h3>
        </div>
        <div className="second-sub-container">
          <h3>Humidity: {humidity}%</h3>
          <h3>Wind: {windSpeed} m/s</h3>
        </div>
      </div>
      {loading && <p className="loading">Loading data...</p>}
      {cityNotFound && <p className="error-message">City Not Found!</p>}
    </>
  );
};

export default Display;
