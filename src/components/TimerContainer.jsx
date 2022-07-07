import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";
import TimerNav from "./TimerNav";

const TimerContainer = () => {
  return (
    <>
      <TimerNav></TimerNav>
      <Container>
        <ProgressBar />
      </Container>
    </>
  );
};

export default TimerContainer;

const Container = styled.div`
  height: 55rem;
  width: 55rem;
  background: #0575e6;
  background: -webkit-linear-gradient(to right, #021b79, #0575e6);
  background: linear-gradient(to right, #021b79, #0575e6);

  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
  -webkit-box-shadow: 0px 1px 50px 28px #00000018;
  box-shadow: 0px 1px 50px 28px #343d8d83;
`;
