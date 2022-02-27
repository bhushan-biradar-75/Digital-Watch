import React, { useState, useRef} from "react";

const Timer = () => {
  let data = [JSON.parse(localStorage.getItem("localTime"))];
  let lts = localStorage.getItem("timervalue") || 0;
  let [timer, setTimer] = useState(lts);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [arr, setArr] = useState([...data.flat()]);
  const increment = useRef(null);

  // start time

  const handleStart = () => {
    if (lts) {
      increment.current = setInterval(() => {
        setIsActive(true);
        setIsPaused(true);
        let newTimer = lts++;
        setTimer(newTimer);
        localStorage.setItem("timervalue", newTimer);
      }, 1000);
    } else {
      increment.current = setInterval(() => {
        setIsActive(true);
        setIsPaused(true);
        let newTimer = timer++;
        setTimer(newTimer);
        localStorage.setItem("timervalue", newTimer);
      }, 1000);
    }
  };

  //for handel the handel pause

  const handlePause = () => {
    setIsActive(false);
    setIsPaused(false);
    clearInterval(increment.current);
  };

  // for delete data from localstorage

  const handleReset = () => {
    setArr([]);
    setTimer(0);

    localStorage.clear();
  };

  // handle stop
  const handleStop = () => {
    clearInterval(increment.current);
    setTimer(0);
  };

  //This function is use for the getting date in hour:mm:second

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  //for push arr in to local storage and add making arr
  const handleLap = () => {
    setArr([...arr, formatTime()]);
  };

  // Remove data from local storage
  const remove = (e) => {
    arr.flat();
    setArr(arr.filter((ele) => {
        if (ele === e) {
          console.log(ele);
        } else {
          return ele;
        }
        localStorage.setItem("localTime", JSON.stringify(arr));
      })
    );
  };

  return (
    //buttuns
    <div className="container bg">
      <div id="stopwatch">
        <div class="green-dot"></div>
        <div class="red-dot"></div>
        <div id="inner-circle">
          <div id="inner-circle1"></div>
          <div id="inner-circle2">
            <h3 class="timer">{formatTime()}</h3>
          </div>
        </div>
      </div>

      <div class="lap ">
        {
          //used ternory operator if nothing is in locol storage it will show nothing
          arr == null
            ? ""
            : arr.flat().map((ele, ind) => {
                localStorage.setItem("localTime", JSON.stringify(arr));
                if (ele != null) {
                  return (
                    <div class="lap-data">
                      <h4>Lap {ind+1}</h4>
                      <h5>{ele}</h5>
                      <div class="icon" onClick={() => remove(ele)}>
                        {" "}
                        <i class="fa fa-trash"></i>
                      </div>
                    </div>
                  );
                }
              })
        }
      </div>

      <div className="buttons">
        {!isActive && !isPaused ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>

        <button onClick={handleLap}>lap</button>
      </div>
    </div>
  );
};

export default Timer;
