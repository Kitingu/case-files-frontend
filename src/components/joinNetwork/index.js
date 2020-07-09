import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth/login";
import Intro from "./Intro";
import Login from "./Login";
import Signup from "./Signup";
import "../../assets/auth/common.scss";
import Hero from "../layout/Hero";
import Spinner from "../shared/Spinner";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const info = (header, inf, link, path) => (
  <>
    <h3>{header}</h3>
    <p>{inf}</p>
    <NavLink to={path}>{link}</NavLink>
  </>
);
const About = ({ login, signup, spinner }) => {
  console.log("PPPPPPPPPPPPPP", login);

  return (
    <>
      <Spinner spinner={spinner} />

      <Hero />
      <Intro />
      <div className="join-network-container" style={{ flexDirection: signup ? "row-reverse" : "row" }}>
        <div className="form" style={{ borderRadius: signup ? "0px 20px 20px 0px" : "20px 0px 0px 20px" }}>
          {login && <Login />}
          {signup && <Signup />}
        </div>
        <div className="info" style={{ borderRadius: signup ? "20px 0px 0px 20px" : "0px 20px 20px 0px" }}>
          <div>
            {signup
              ? info("Welcome Back", "To keep connected with us, please enter your personal info", "Sign In", "/login")
              : info("Hello Friend!", "Enter your personal details to access the archives", "Sign Up", "/signup")}
          </div>
        </div>
      </div>
    </>
  );
};
export const mapStateToProps = ({ error, spinner, auth }) => ({
  error,
  spinner: spinner === true,
  auth,
});
const actions = { loginAction: login };

export default connect(mapStateToProps, actions)(About);
