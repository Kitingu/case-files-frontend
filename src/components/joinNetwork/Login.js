import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth/login";
import InputField from "./InputField";
import Button from "./Button";

const About = ({ loginAction, error, spinner, auth }) => {
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

  return (
    <>
      <form onSubmit={handleSubmitLoginData}>
        <h2>Sign In</h2>
        <InputField onChange={handleLoginInputChange} type="email" name="email" placeholder="email" />
        <InputField onChange={handleLoginInputChange} type="password" name="password" placeholder="password" />
        <Button type="submit" name="Submit" />
      </form>
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
