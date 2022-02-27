import React, { useContext } from "react";
import TimerContaxt from "../context/TimerContex";

function TimerWatch() {
  const Con = useContext(TimerContaxt);

  return (
    <>
      <div id="stopwatch" className="border">
        <div id="inner-circle">
          <div id="inner-circle1"></div>
          <div id="inner-circle2">
            <h3 classLName="timer" style={{fontFamily:" 'Orbitron', sans-serif"}} >{Con.formatTime()}</h3>
          </div>
        </div>
        <div className="green-dot"></div>
        <div className="red-dot"></div>
        <div className="blue-dot"></div>
      </div>
    </>
  );
}

export default TimerWatch;
