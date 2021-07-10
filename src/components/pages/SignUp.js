import React from "react";
import JoinNetwork from "../joinNetwork";

const SignUp = ({ match }) => {
  return <JoinNetwork signup={match.path === "/signup"} />;
};
export default SignUp;
