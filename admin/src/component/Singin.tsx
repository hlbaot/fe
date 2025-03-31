import React from 'react';
import '../assets/styles/Signin.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Singin() {
 

  const onSubmit = (values) => {
    console.log('Dữ liệu form:', values); 
  };

  return (
    <section className="formSignin">
      <div className="login-box">
        <p>Login Admin</p>
        <Formik
          initialValues={{ account: '', password: '' }} 
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="user-box">
                <Field type="text" name="account" required />
                <label>Account</label>
                <ErrorMessage name="account" component="div" className="error" />
              </div>
              <div className="user-box">
                <Field type="password" name="password" required />
                <label>Password</label>
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                <span />
                <span />
                <span />
                <span />
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default Singin;