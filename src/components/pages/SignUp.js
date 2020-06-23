import React from 'react';
import Hero from '../layout/Hero';
import FooterLinks from '../layout/FooterLinks';
import Signup from '../signup/signup';

const SignUp = () => {
  return (
    <div>
      <Hero />
      <Signup />
      <FooterLinks color="primary-blue" />
    </div>
  );
};
export default SignUp;
