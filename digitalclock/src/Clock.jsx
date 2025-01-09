import React, { useEffect, useState } from 'react';
import './clock.css';

const Clock = () => {
  const [currenTime, setCurrenTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrenTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatHour = (hour) => {
    return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  };

  const formatZero = (num) => {
    return num < 10 ? "0" + num : num;
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="content">
        <h1>DIGITAL CLOCK</h1>
        <h3>
          {formatHour(currenTime.getHours())}:{formatZero(currenTime.getMinutes())}:
          {formatZero(currenTime.getSeconds())} {currenTime.getHours() >= 12 ? "PM" : "AM"}
        </h3>
        <h3>{formatDate(currenTime)}</h3>
      </div>
    </>
  );
};

export default Clock;
