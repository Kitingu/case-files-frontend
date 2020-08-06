import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { login } from "../../redux/actions/auth/login";
import InputField from "./InputField";
import Button from "./Button";
import TextArea from "./TextArea";
import { addUser } from "../../redux/actions/auth/register";

const validationSchema = yup.object().shape({
  name: yup.string().min(2).required().max(25, 'Too long'),
  email: yup
    .string()
    .email('Please provide a valid email')
    .required()
    .max(25),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
      'password must have a number, uppercase and a lower case'
    ),
  affiliation: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords do not match')
    .required(),
  document: yup
  .mixed()
  .required("A file is required"),
});

const About = ({ loginAction, error, spinner, auth, signupAction }) => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  const [signupData, setSignupData] = useState(new FormData());
  const handleLoginInputChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };
  const handleSubmitLoginData = (e) => {
    let data = new FormData();
    data.append("name", signupData.name);
    data.append("affiliation", signupData.affiliation);
    data.append('purpose', signupData.purpose);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign Up</h2>
        <InputField register={register} type="text" name="name" placeholder="Name*" />
        <div>{errors.name && errors.name.message}</div>
        <InputField register={register} type="email" name="email" placeholder="Email*" />
        <div>{errors.email && errors.email.message}</div>
        <TextArea
          register={register}
          className="affiliation"
          type="text"
          name="affiliation"
          placeholder="Affiliation to  an educational or research institution or a legal or human rights association"
        />
        <div>{errors.affiliation && errors.affiliation.message}</div>
        <InputField register={register} type="text" name="purpose" placeholder="Purpose of the request*" />
        <div>{errors.purpose && errors.purpose.message}</div>
        <InputField register={register} type="password" name="password" placeholder="Password*" />
        <div>{errors.password && errors.password.message}</div>
        <InputField
          register={register}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password*"
        />
        <div>{errors.confirmPassword && errors.confirmPassword.message}</div>
        <InputField register={register} type="file" id="document" name="document" placeholder="document" />
        <label style={{ fontWeight: "300" }} htmlFor="document">
          Upload photo evidence of your identity
        </label>
        <div>{errors.document && errors.document.message}</div>
         <h4>The following evidence are acceptable. Either:</h4>
        <p>1. A photo of a card showing your affiliation to relevant institution or association</p>
        <p>2. A photo of a national ID card and a copy of a statement of your research questions’</p>
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
const actions = { loginAction: login, signupAction: addUser };

export default connect(mapStateToProps, actions)(About);
