import React from 'react';

export const UserProfile = ({ match }) => {
  // if User is Signed in show profile
  const isLoading = false;
  // else redirect error page or signup page
  return (
    <div>
      <h2>{isLoading ? <h1>User exist</h1> : <h1>User doesn't exist</h1>}</h2>
    </div>
  );
};
