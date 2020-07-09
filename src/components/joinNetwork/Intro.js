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
    <div className="intro-container">
      <h2>Join the Network</h2>
      <p>
        KKKKKKKKKKK KKKKKKKKKK KKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKK KKKKKKKKKKK KKKKKKKKKKKKK KKKKKKKKKKKKK KKKKKKKKKKKK
        KKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKK
        KKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKKKKK
        KKKKKKKKKKK KKKKKKKKKKKKKKKKKKKKKKKK KKKKKKKKKKKKKKKK
      </p>
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
