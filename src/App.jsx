import React from "react";
import Navbar from "./components/Navbar";
import TimerContainer from "./components/TimerContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Auth from "./components/Auth";

const App = () => {
  return (
    <>
      <Auth>
      <Navbar></Navbar>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <TimerContainer></TimerContainer>
                </PrivateRoute>
              }
            ></Route>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="*" element={<Error></Error>}></Route>
          </Routes>
        </Router>
      </Auth>
    </>
  );
};

export default App;
