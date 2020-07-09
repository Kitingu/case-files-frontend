import React from "react";
import Hero from "../layout/Hero";
import FooterLinks from "../layout/FooterLinks";
import Signup from "../signup/signup";
import JoinNetwork from "../joinNetwork";

const SignUp = ({ match }) => {
  return <JoinNetwork signup={match.path === "/signup"} />;
};
export default SignUp;

/* <div>
<Hero />
<Signup />
<FooterLinks color="primary-blue" />
</div> */
