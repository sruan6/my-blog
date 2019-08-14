import React from 'react';

export const Login = () => (
  <div>
    <h1>Website Name</h1>
    <hr />
    <a href="/auth/google">Login With Google</a>
    <a href="/auth/facebook">Login with Facebook</a>
    <h4>OR</h4>
    <form action="/login" method="post">
      <div>
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <div>
        <input type="submit" value="Log In" />
      </div>
    </form>
    <hr />
    <h3>Don't Have an account?</h3>
    <a href="/signup">SIGN UP</a>
  </div>
);
