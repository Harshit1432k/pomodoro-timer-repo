import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { TimerContext } from "../context/TimerProvider";

const Timer = () => {
  const { time, setTime, isTimerActive, setIsTimerActive, defaultTime } =
    useContext(TimerContext);

  useEffect(() => {
    if (isTimerActive && time > 0) {
      const oneSec = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
      return () => clearInterval(oneSec);
    }
  }, [time, isTimerActive]);

  const timeConverter = (time) => {
    const mins = String(Math.trunc(time / 60)).padStart(2, 0);
    const secs = String(Math.trunc(time % 60)).padStart(2, 0);
    return `${mins}:${secs}`;
  };

  const toggleTimer = () => {
    setIsTimerActive(!isTimerActive);
  };

  const resetTimer = () => {
    setTime(defaultTime);
    setIsTimerActive(false);
  };

  return (
    <Container>
      <TimerClock>{timeConverter(time)}</TimerClock>
      <ButtonContainer>
        <ToggleButton onClick={toggleTimer}>
          {isTimerActive ? "PAUSE" : "START"}
        </ToggleButton>
        <ResetButton onClick={resetTimer}>RESET</ResetButton>
      </ButtonContainer>
    </Container>
  );
};

export default Timer;

const Container = styled.div`
  display: grid;
  place-items: center;
  color: #ccd1e4;
`;

const TimerClock = styled.p`
  font-size: 14rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 80%;

  justify-content: space-around;
`;

const ToggleButton = styled.button`
  all: unset;
  font-size: 3rem;
  letter-spacing: 0.7rem;
  cursor: pointer;
`;
const ResetButton = styled.button`
  all: unset;
  font-size: 3rem;
  letter-spacing: 0.7rem;
  color: #02186d;
  cursor: pointer;
`;
