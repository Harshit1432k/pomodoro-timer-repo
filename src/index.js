import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import TimerProvider from "./context/TimerProvider";

const GlobalSyle = createGlobalStyle`
*{margin: 0;
padding:0;
box-sizing:border-box}

html,body{
  background: #4b6cb7; 
background: -webkit-linear-gradient(to right, #182848, #4b6cb7);  
background: linear-gradient(to right, #182848, #4b6cb7); 


font-size: 62.5%;
height: 100vh;
font-family: 'Secular One', sans-serif;

body{
  font-size: 1.6rem;
}
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-yoajk575.us.auth0.com"
      clientId="OIwcTnL1xB9rjCrKw1EfNXApsceYVIdX"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <TimerProvider>
        <GlobalSyle></GlobalSyle>
        <App />
      </TimerProvider>
    </Auth0Provider>
  </React.StrictMode>
);
