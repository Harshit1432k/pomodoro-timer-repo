import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useAuth0} from '@auth0/auth0-react'
const Login = () => {
    const {loginWithRedirect}=useAuth0()
  return (
    <LoginContainer>
    <div>
      <h1>Login to access the timer</h1>
     
      <Link className="link" to='/' onClick={loginWithRedirect}>Login</Link>
    </div>
  </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  display: grid;
text-align: center;
  place-items: center;
  margin: auto;
  min-height: 100vh;
color: #ccd1e4;
  h1 {
    font-size: 6rem;
  }

 

  .link{
    all: unset;
font-size: 3rem;
    padding: 0.5rem 3rem;
    margin-top: 2rem;
    display: inline-block;
    border-radius: 3rem;
    background-color: #ccd1e4;
    color: #021b79;
    cursor: pointer;
  }
`;
