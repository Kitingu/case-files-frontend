import React, { Component } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form, FormGroup, Row, Col,FormLabel,Container } from 'react-bootstrap';
import FooterLinks from '../layout/FooterLinks';
// import TextInput from './textInput';

import * as yup from 'yup';
import { connect } from 'react-redux';
import { addUser } from '../../redux/actions/auth/register';
import Spinner from '../shared/Spinner';

const validationSchema = yup.object().shape({
    firstname: yup.string().min(3).required().max(25, 'Too long'),
    lastname: yup.string().required().max(25),
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
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'passwords do not match')
      .required(),
    document: yup.object(),
  });

const Signup = () => {
  const { register, handleSubmit, errors } = useForm({
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <>
      <Container>
      <Row className="mb-5">
        <Col className="col-lg-12 text-center">
          <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup controlId="formBasicEmail">
            <input type="text" name="firstname"
              placeholder="firstname"
              className={`form-control ${
                errors.firstname
                  ? 'is-invalid'
                 : ''
                }`} />
          </FormGroup>
          </form>
        </Col>
      </Row>
      </Container>
    </>
  )
}
// class Signup extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       firstname: '',
//       lastname: '',
//       email: '',
//       password: '',
//       document: null,
//     };
//     console.log(this.props)
//   }
//   handleFile = (e) => {
//     this.setState({
//       document: e.target.files[0],
//     });
//   };
//   render() {
//     const validationSchema = yup.object().shape({
//       firstname: yup.string().min(3).required().max(25, 'Too long'),
//       lastname: yup.string().required().max(25),
//       email: yup
//         .string()
//         .email('Please provide a valid email')
//         .required()
//         .max(25),
//       password: yup
//         .string()
//         .required()
//         .min(8)
//         .matches(
//           /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
//           'password must have a number, uppercase and a lower case'
//         ),
//       confirmPassword: yup
//         .string()
//         .oneOf([yup.ref('password'), null], 'passwords do not match')
//         .required(),
//       document: yup.object(),
//     });

//     return (
//       <>
//         <Container>
//           <Row className="mb-5">
//             <Col className="col-lg-12 text-center">
//               <h1 className="mt-5">Sign Up Form</h1>
//             </Col>
//           </Row>
//           <Row>
//             <Col className="col-lg-12">
//               <Formik
//                 initialValues={{
//                   firstname: this.state.firstname,
//                   lastname: this.state.lastname,
//                   email: this.state.email,
//                   password: this.state.password,
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, { setSubmitting }) => {
//                   const {
//                     firstname,
//                     lastname,
//                     email,
//                     password,
//                     document,
//                   } = values;
//                   const { props } = this;
//                   console.log(firstname);
//                   let data = new FormData();
//                   data.append('document', document);
//                   data.append('firstName', firstname);
//                   data.append('lastName', lastname);
//                   data.append('email', email);
//                   data.append('password', password);
//                   props.addUser(data);
//                   setSubmitting(false);
//                 }}
//               >
//                 {({
//                   touched,
//                   errors,
//                   values,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                   isSubmitting,
//                 }) => (
//                   <div style={{ marginTop: '100px' }}>
//                     <Spinner spinner={this.props.spinner} />
//                     <Form
//                       className="sign-up"
//                       style={{ display: 'flex', flexDirection: 'column' }}
//                       onSubmit={handleSubmit}
//                     >
//                       <FormGroup controlId="formBasicEmail">
//                         <Field
//                           type="text"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           name="firstname"
//                           value={values.firstname}
//                           placeholder="firstname"
//                           className={`form-control ${
//                             touched.firstname && errors.firstname
//                               ? 'is-invalid'
//                               : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           component="div"
//                           name="firstname"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>

//                       <FormGroup>
//                         <input
//                           type="text"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           name="lastname"
//                           value={values.lastname}
//                           placeholder="lastname"
//                           className={`form-control ${
//                             touched.lastname && errors.lastname
//                               ? 'is-invalid'
//                               : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           component="div"
//                           name="lastname"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>
//                       <FormGroup>
//                         <input
//                           type="email"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           name="email"
//                           value={values.email}
//                           placeholder="email"
//                           className={`form-control ${
//                             touched.email && errors.email ? 'is-invalid' : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           component="div"
//                           name="email"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>
//                       <FormGroup>
//                         <input
//                           type="password"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           name="password"
//                           value={values.password}
//                           placeholder="password"
//                           className={`form-control ${
//                             touched.password && errors.password
//                               ? 'is-invalid'
//                               : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           component="div"
//                           name="password"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>

//                       <FormGroup>
//                         <input
//                           type="password"
//                           onChange={handleChange}
//                           onBlur={handleBlur}
//                           name="confirmPassword"
//                           value={values.confirmPassword}
//                           placeholder="confirm password"
//                           className={`form-control ${
//                             touched.confirmPassword && errors.confirmPassword
//                               ? 'is-invalid'
//                               : ''
//                           }`}
//                         />
//                         <ErrorMessage
//                           component="div"
//                           name="password"
//                           className="invalid-feedback"
//                         />
//                       </FormGroup>

//                       <FormGroup>
//                         <input
//                           type="file"
//                           onChange={this.handleFile}
//                           name="document"
//                           placeholder="document"
//                         />
//                       </FormGroup>
//                       <FormGroup>
//                         <input
//                           type="submit"
//                           disabled={isSubmitting}
//                           value={isSubmitting ? 'Please wait...' : 'Submit'}
//                         />
//                       </FormGroup>
//                       <pre> {JSON.stringify(values, null, 2)} </pre>
//                       <pre> {JSON.stringify(errors, null, 2)} </pre>
//                     </Form>
//                   </div>
//                 )}
//               </Formik>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }
const mapStateToProps = ({ error, spinner }) => ({
  error,
  spinner: spinner === true,
});

const mapDispatchToProps = (dispatch) => ({
  addUser: (user) => dispatch(addUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
