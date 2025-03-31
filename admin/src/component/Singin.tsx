import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../assets/styles/Signin.scss';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import API_Signin from '../api/signin';

function Signin({onLogin}) {
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post(API_Signin ,{
        account: values.account,
        password: values.password,
      });

      if (res.data.token) {
        sessionStorage.setItem('token:', res.data.token);

        Swal.fire({
          icon: 'success',
          title: 'Đăng nhập thành công',
          text: 'Welcome back!',
          timer: 2000, 
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate('/admin');
        }, 2000);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Đăng nhập thất bại',
          text: 'Tài khoản hoặc mật khẩu sai',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Đăng nhập thất bại',
        text: 'Tài khoản hoặc mật khẩu sai !',
      });
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="formSignin">
      <div className="login-box">
        <p>Login Admin</p>
        <Formik initialValues={{ account: '', password: '' }} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="user-box">
                <Field type="text" name="account" required />
                <label>Account</label>
              </div>
              <div className="user-box">
                <Field type="password" name="password" required />
                <label>Password</label>
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

export default Signin;
