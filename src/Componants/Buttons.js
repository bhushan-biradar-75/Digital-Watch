import React, { useContext } from "react";
import TimerContaxt from "../context/TimerContex";
function Button() {
  const Con = useContext(TimerContaxt);

  const handleStart = () => {
    //lts is localstorage storage time
    if (Con.lts) {
      Con.increment.current = setInterval(() => {
        Con.setIsActive(true);
        Con.setIsPaused(true);
        let newTimer = Con.lts++;
        Con.setTimer(newTimer);
        localStorage.setItem("timervalue", newTimer);
      }, 1000);
    } else {
      //timer is state that i pass in formate time function
      Con.increment.current = setInterval(() => {
        Con.setIsActive(true);
        Con.setIsPaused(true);
        let newTimer = Con.timer++;
        Con.setTimer(newTimer);
        localStorage.setItem("timervalue", newTimer);
      }, 1000);
    }
  };
  return (
    <div>
      <div className="buttons">
        {/* toggling the start pause button */}
        {!Con.isActive && !Con.isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={() => Con.handlePause()}>Pause</button>
        )}
        {/*Button with given function */}
        <button onClick={() => Con.handleStop()}>Stop</button>
        <button onClick={() => Con.handleReset()}>Reset</button>
        <button onClick={() => Con.handleLap()}>Lap</button>
      </div>
    </div>
  );
}

export default Button;
