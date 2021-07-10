/* eslint-disable no-unused-vars */
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
  

  return (
    <div className="intro-container">
      <h2>Join the Network</h2>
      <p>
        We aim to share knowledge, make connections and strengthen research
        networks for justice, human rights, democracy and peace across Eastern
        Africa, building on our recent experiences in South Sudan. Networks
        produce forms of power or ‘social capital’, enabling individuals and
        groups to advance their interests and agendas. Lawyers, paralegals,
        civil society and community activists, working to document and combat
        injustices at the grassroots can establish new connections and share and
        use resources. Academic researchers and students in Eastern Africa can
        also both provide and access primary data, to further knowledge-sharing
        and dialogue in the region.{' '}
      </p>
      <p>
        To join our network, you need to demonstrate your existing commitment to
        working for justice, human rights, democracy or peace in Eastern Africa,
        either as a scholar or practitioner. Joining the network connects you to
        other justice activists and allows you access to our primary data. We
        require your name, an affiliation to an educational institution, a
        research initiative, a civil society or community-based organisation or
        network to ensure that the information is being used for its intended
        purposes: to promote research, knowledge and action towards justice in
        the region.
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
