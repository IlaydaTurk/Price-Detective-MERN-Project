import React from 'react';
import UserSignin from '../components/UserSignin/UserSignin';

// We have to use nested router for sign-in and sign-up pages.

const Signin = () => {
  return (
    <div>
      <UserSignin />
    </div>
  )
}

export default Signin