import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth/login";
import InputField from "./InputField";
import Button from "./Button";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers';
import toast from '../../utils/toast';
import { useHistory } from "react-router-dom";

const validationSchema = yup.object().shape({
  email: yup
  .string()
  .email('Please provide a valid email')
  .required()
  .max(25),
  password: yup
  .string()
  .required(),
});

const About = ({ loginAction, error, spinner, auth }) => {
  const history = useHistory();
  console.log(error, spinner, auth);
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  console.log(error, spinner, auth);

  const onSubmit = data => {
    console.log(data);
    loginAction(data);
  };

  useEffect(() => {
    if(error.status === 401) {
      toast('error', 'wrong password or email');
    }
  }, [error.status])

  useEffect(() => {
    if(auth.login?.status === 200) {
      toast('success', 'Successfully logged in');
      history.push("/archives");
    }
  }, [auth.login])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        <InputField register={register} className={`input-form ${errors.email && 'input-error'}`} type="email" name="email" placeholder="Email" />
        <p className="invalid-feedback">{errors.email && errors.email.message}</p>
        <InputField register={register} className={`input-form ${errors.password && 'input-error'}`} type="password" name="password" placeholder="Password" />
        <p className="invalid-feedback">{errors.password && errors.password.message}</p>
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
