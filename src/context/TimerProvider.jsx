import React, { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [time, setTime] = useState(0);
  const [currentTimer, setCurrentTimer] = useState(0);
  const [progress, setProgress] = useState(100);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const [workingTime, setWorkingTime] = useState(10);
  const [breakTime, setBreakTime] = useState(300);

  const [defaultTime, setDefaultTime] = useState();

  useEffect(() => {
    if (currentTimer === 0) {
      setTime(workingTime);
      setDefaultTime(workingTime);
      return;
    }
    if (currentTimer === 1) {
      setTime(breakTime);
      setDefaultTime(breakTime);
      return;
    }
  }, [workingTime, breakTime, currentTimer]);

  return (
    <TimerContext.Provider
      value={{
        currentTimer,
        setCurrentTimer,
        progress,
        setProgress,
        isTimerActive,
        setIsTimerActive,
        time,
        setTime,
        defaultTime,
        setDefaultTime,
        workingTime,
        setWorkingTime,
        breakTime,
        setBreakTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
