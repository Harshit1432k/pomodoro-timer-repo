import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { TimerContext } from "../context/TimerProvider";

const timersTypesArray = ["Work", "Break"];

const TimerNav = () => {
  const { currentTimer, setCurrentTimer } = useContext(TimerContext);

  const navigateTimer = (i) => {
    setCurrentTimer(i);
  };

  return (
    <TimerNavContainer>
      {timersTypesArray.map((timer, i) => (
        <TimerNavButton
          currentTimer={currentTimer === i}
          key={i}
          onClick={() => {
            navigateTimer(i);
          }}
        >
          {timer}
        </TimerNavButton>
      ))}
    </TimerNavContainer>
  );
};

export default TimerNav;

const TimerNavContainer = styled.div`
  background: #ccd1e49d;
  height: 5rem;
  width: 40rem;
  margin: 0 auto 4rem;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 0.4rem;
`;

const TimerNavButton = styled.button`
  all: unset;
  height: 4rem;
  text-align: center;
  color: white;
  border-radius: 2rem;
  flex: 1;
  font-size: 2rem;

  ${({ currentTimer }) =>
    currentTimer &&
    css`
      background-color: #011355 ;
    `}
`;
