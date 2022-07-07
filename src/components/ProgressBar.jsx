import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { TimerContext } from "../context/TimerProvider";
import Timer from "./Timer";

const ProgressBar = () => {
  const { progress, setProgress, time, defaultTime } = useContext(TimerContext);

  const timerProgress = () => {
    setProgress(time / (defaultTime / 100));
  };

  useEffect(() => {
    timerProgress();
  }, [time, setProgress]);

  return (
    <OuterContainer
      style={{
        background: `conic-gradient(#010824 ${progress}%,#ccd1e4 ${progress}%)`,
      }}
    >
      <InnerContainer>
        <Timer></Timer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default ProgressBar;

const OuterContainer = styled.div`
  height: 48rem;
  width: 48rem;
 
  border-radius: 50%;
  display: grid;
  place-items: center;
  `;

const InnerContainer = styled.div`
  height: 45rem;
  width: 45rem;
  background: #0575E6;  
background: -webkit-linear-gradient(to right, #021B79, #0575E6);
background: linear-gradient(to right, #021B79, #0575E6); 

  
  border-radius: 50%;
  display: grid;
  place-items: center;
 
`;
