/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth/login";
import Spinner from "../shared/Spinner";
import JoinNetwork from "../joinNetwork";

const About = ({ loginAction, error, spinner, auth, match }) => {
  const [loginData, setLoginData] = useState({});
  const handleLoginInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const handleSubmitLoginData = (e) => {
    e.preventDefault();
    loginAction(loginData);
  };

  return <JoinNetwork login={match.path === "/login"} />;
};
export const mapStateToProps = ({ error, spinner, auth }) => ({
  error,
  spinner: spinner === true,
  auth,
});
const actions = { loginAction: login };

export default connect(mapStateToProps, actions)(About);
