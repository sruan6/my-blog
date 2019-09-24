import React from 'react';
import { Formik } from 'formik';

export const Signup = () => (
  <div className="form-container">
    <h1 className="login-title">Stephen's Blog</h1>
    <form action="/auth/signup" method="post">
      <div>
        <input type="email" name="email" placeholder="email" />
      </div>
      <div>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div>
        <input type="password" name="password1" placeholder="password" />
      </div>
      <div>
        <input
          type="password"
          name="password2"
          placeholder="confirm password"
        />
      </div>
      <div className="form-login">
        <input className="register-button" type="submit" value="Submit" />
      </div>
    </form>
  </div>
);
