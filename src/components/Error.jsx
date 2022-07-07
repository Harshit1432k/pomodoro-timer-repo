import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Error = () => {
  return (
    <ErrorContainer>
      <div>
        <h1>404</h1>
        <h3>Oops! An error occured. </h3>
        <Link className="link" to='/'>BACK HOME</Link>
      </div>
    </ErrorContainer>
  );
};

export default Error;

const ErrorContainer = styled.div`
  display: grid;
text-align: center;
  place-items: center;
  margin: auto;
  min-height: 100vh;
color: #ccd1e4;
  h1 {
    font-size: 18rem;

  }

  h3 {
    font-size: 4rem;
margin-top: -5rem;
  }

  .link{
    all: unset;
font-size: 3rem;
    padding: 1rem 3rem;
    margin-top: 2rem;
    display: inline-block;
    border-radius: 3rem;
    background-color: #ccd1e4;
    color: #021b79;
    cursor: pointer;
  }
`;
