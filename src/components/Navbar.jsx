import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <NavbarContainer>
      <h1>Pomodoro Timer</h1>

      {isUser && (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          LOGOUT
        </button>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 8rem;
  margin: 0 0 3rem;
  background: linear-gradient(to bottom, #021c7953, #0576e66c);
  h1 {
    font-size: 6rem;
    text-align: center;
    color: #ccd1e4;
    margin: auto;
  }
  button {
    all: unset;
    font-size: 2.4rem;
    color: #ccd1e4;
    cursor: pointer;
  }
`;
