/* eslint-disable react/button-has-type */
import React from 'react';

export const Login = () => (
  <div className="form-container">
    <h1 className="login-title">Stephen's Blog</h1>
    <hr />
    <div className="container">
      <h2>To continue, log in!</h2>
      <button className="google-button">
        <a href="/auth/google">Login With Google</a>
      </button>
      <br />
      <button className="facebook-button">
        <a href="/auth/facebook">Login with Facebook</a>
      </button>
      <div className="divider">
        <strong className="divider-title ng-binding">or</strong>
      </div>

      <form action="/auth/login" method="post">
        <div>
          <input type="text" name="username" placeholder="username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="password" />
        </div>
        <div className="form-login">
          <input className="login-button" type="submit" value="Log In" />
        </div>
      </form>
      <h3>Don't Have an account?</h3>
      <button className="signup-button">
        <a className="signup-link" href="/signup">
          SIGN UP
        </a>
      </button>
    </div>
  </div>
);
