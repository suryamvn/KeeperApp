import React, { useState } from "react";

function Header() {
  setInterval(updateTime, 1000);
  const t = new Date().toLocaleTimeString([], { hour12: false });
  const dt = new Date().toDateString();

  const [day, setTime] = useState({
    time: t,
    date: dt
  });

  function updateTime() {
    setTime({
      time: new Date().toLocaleTimeString([], { hour12: false }),
      date: new Date().toDateString()
    });
  }

  return (
    <header>
      <h1>Keeper</h1>
      <div className="timeSettings">
        <h1 name="time">{day.time}</h1>
        <p name="date">{day.date}</p>
      </div>
    </header>
  );
}

export default Header;
