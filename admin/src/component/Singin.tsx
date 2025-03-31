import React from 'react'
import '../assets/styles/Signin.scss';
function Singin() {
  
  return (
    <section className='formSignin'>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input required  type="text" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input required type="password" />
            <label>Password</label>
          </div>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
        </form>
      </div>
    </section>
  )
}

export default Singin