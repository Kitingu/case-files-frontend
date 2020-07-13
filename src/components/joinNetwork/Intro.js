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
        Lawyers, paralegals and citizen activists are struggling to improve the
        justice system ‘from below’ against harsh odds. Too often their work
        goes unrecognized and unsupported. Many of them work voluntarily, under
        constant pressure or at great personal risk. We feature individual
        stories of legal activism at the grassroots, illustrating innovative
        efforts to promote access to justice and basic rights and to document
        and reflect upon these initiatives. </p>
        <p>The legal activists featured are
        also in many cases researchers and network members. Their work has
        informed international research projects and contributed to research
        materials in the archive and on the site. Justice Networks serves as a
        platform to highlight their concerns and to showcase their struggles and
        achievements.
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
