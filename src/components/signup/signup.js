import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/auth/register';
import Spinner from '../shared/Spinner';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      document: null,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, document } = this.state;
    const { props } = this;
    let data = new FormData();
    data.append('document', document);
    data.append('firstName', firstname);
    data.append('lastName', lastname);
    data.append('email', email);
    data.append('password', password);
    props.addUser(data);

  };
  handleFile = (e) => {
    this.setState({
      document: e.target.files[0]
    });
  };
  render() {
    return (
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          onChange={this.handleChange}
          name="firstname"
          value={this.state.firstname}
          placeholder="firstname"
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="lastname"
          value={this.state.lastname}
          placeholder="lastname"
        />
        <input
          type="email"
          onChange={this.handleChange}
          name="email"
          value={this.state.email}
          placeholder="email"
        />
        <input
          type="password"
          onChange={this.handleChange}
          name="password"
          value={this.state.password}
          placeholder="password"
        />
        <input
          type="file"
          onChange={this.handleFile}
          name="document"
          placeholder="document"
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});
export default connect(undefined, mapDispatchToProps)(Signup);
