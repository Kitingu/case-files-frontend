import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth/login";
import InputField from "./InputField";
import Button from "./Button";
import TextArea from "./TextArea";
import { addUser } from "../../redux/actions/auth/register";

const About = ({ loginAction, error, spinner, auth, signupAction }) => {
  const [signupData, setSignupData] = useState(new FormData());
  const handleLoginInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSubmitLoginData = (e) => {
    let data = new FormData();
    data.append("firstName", signupData.firstName);
    data.append("lastName", signupData.lastName);
    data.append("email", signupData.email);
    data.append("password", signupData.password);
    data.append("confirmPassword", signupData.confirmPassword);
    data.append("document", signupData.document);
    e.preventDefault();
    signupAction(data);
  };

  const handleFile = (e) => {
    setSignupData({
      document: e.target.files[0],
      ...signupData,
    });
  };
  return (
    <>
      <form onSubmit={handleSubmitLoginData}>
        <h2>Sign Up</h2>
        <InputField onChange={handleLoginInputChange} type="text" name="firstName" placeholder="First Name" />
        <InputField onChange={handleLoginInputChange} type="text" name="lastName" placeholder="Last Name" />

        <InputField onChange={handleLoginInputChange} type="email" name="email" placeholder="email" />
        <TextArea
          onChange={handleLoginInputChange}
          className="affiliation"
          type="text"
          name="affiliation"
          placeholder="Affiliation to  an educational or research institution or a legal or human rights association"
        />
        <InputField onChange={handleLoginInputChange} type="text" name="purpose" placeholder="Purpose of the request" />
        <InputField onChange={handleLoginInputChange} type="password" name="password" placeholder="password" />
        <InputField
          onChange={handleLoginInputChange}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password*"
        />
        <InputField onChange={handleFile} type="file" id="document" name="document" placeholder="document" />
        <label style={{ fontSize: "11px", fontWeight: "normal" }} for="document">
          Upload photo evidence of your identity
        </label>
        <Button type="submit" name="Submit" />
        <h4>The following evidence are acceptable. Either:</h4>
        <p>1. A photo of a card showing your affiliation to relevant institution or association</p>
        <p>2. A photo of a national ID card and a copy of a statement of your research claims</p>
      </form>
    </>
  );
};
export const mapStateToProps = ({ error, spinner, auth }) => ({
  error,
  spinner: spinner === true,
  auth,
});
const actions = { loginAction: login, signupAction: addUser };

export default connect(mapStateToProps, actions)(About);
