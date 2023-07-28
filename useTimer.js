import { useState, useEffect } from "react";

const useTimer = () => {
  const [secondsTimer, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

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

  return { secondsTimer, startTimer, stopTimer };
};

export default useTimer;
