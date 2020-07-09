import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth/login";
import Spinner from "../shared/Spinner";
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
  console.log("LLLLLLLLLLLLLLLLLLLL", error, spinner, auth);

  return (
    <div style={{ marginTop: "100px" }}>
      <Spinner spinner={spinner} />
      <form onSubmit={handleSubmitLoginData}>
        <input
          onChange={handleLoginInputChange}
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          onChange={handleLoginInputChange}
          type="password"
          name="password"
          placeholder="password"
        />
        <input type="submit" />
      </form>
    </div>
  );
};
export const mapStateToProps = ({ error, spinner, auth }) => ({
  error,
  spinner: spinner === true,
  auth,
});
const actions = { loginAction: login };

export default connect(mapStateToProps, actions)(About);
