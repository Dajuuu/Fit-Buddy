import React, { createContext, useContext, useState, useEffect } from "react";

const TimerContext = createContext();

const useTimer = () => {
  // Update the timer itself
  const [secondsTimer, setSeconds] = useState(0);
  // Declares whether the timer is running or not
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    // When the timer is running, increase the counter by every second
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          console.log("Seconds passed:", prevSeconds + 1);
          return prevSeconds + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return { secondsTimer, startTimer, stopTimer, resetTimer };
};

const TimerProvider = ({ children }) => {
  const timer = useTimer();

  return (
    <TimerContext.Provider value={timer}>{children}</TimerContext.Provider>
  );
};

const useTimerContext = () => useContext(TimerContext);

export { useTimerContext, TimerProvider };
