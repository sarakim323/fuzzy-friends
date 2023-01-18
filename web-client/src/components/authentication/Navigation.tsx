import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import SignupButton from './SignupButton';

const Navigation = () => {
  const { isAuthenticated, user } = useAuth0();
  return (
    <div className="container mx-auto flex flex-wrap items-center">
      {!isAuthenticated && (
        <>
          <h5>To start using the app, please sign in.</h5>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"></div>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {isAuthenticated && (
        <>
          <h5>Hello, {user.name}</h5>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default Navigation;
