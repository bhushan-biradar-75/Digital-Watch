import React, { useState, useRef } from 'react'
import TimerContaxt from './TimerContex'


function TimerState(props) {
  let data = [JSON.parse(localStorage.getItem('localTime'))];
  const [arr, setArr] = useState([...data.flat()]);
  let lts = localStorage.getItem('timervalue') || 0;
  let [timer, setTimer] = useState(lts);
  const increment = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  //for handel the handel pause
  const handlePause = () => {
    setIsActive(false);
    setIsPaused(false);
    clearInterval(increment.current);
  };

  // for delete data from localstorage
  const handleReset = () => {
    setIsActive(false);
    setIsPaused(false);
    clearInterval(increment.current);
    setArr([]);
    setTimer(0)
    localStorage.clear();
  };

  // handle stop timer and toggle to start button
  const handleStop = () => {
    setIsActive(false);
    setIsPaused(false);
    clearInterval(increment.current);
    setTimer(0)
    localStorage.setItem('timervalue',JSON.stringify(0))
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
    arr.flat()
    setArr( arr.filter((ele,ind) => {
        if (ind === e) {
          console.log(ele);
        } else {
          return ele; }
        localStorage.setItem('localTime', JSON.stringify(arr));
      })
    );
  };
  return (
    <TimerContaxt.Provider value={{ remove: remove, formatTime: formatTime, handleReset: handleReset, handleStop: handleStop, handlePause: handlePause, handleLap: handleLap, arr: arr, data: data, lts: lts, timer: timer, increment: increment, setTimer: setTimer, isActive: isActive, isPaused: isPaused, setIsActive: setIsActive, setIsPaused: setIsPaused }}>
      {props.children}
    </TimerContaxt.Provider>
  )
}

export default TimerState