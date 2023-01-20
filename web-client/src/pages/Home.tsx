import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../components/authentication/LoginButton';
import { SignupButton } from '../components/authentication/SignupButton';

export const Home = ({ user }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="container mx-auto flex flex-wrap items-center">
      <div>This is the home page</div>
      <div className="container mx-auto flex flex-wrap items-center">
        {!isAuthenticated && (
          <>
            <h5>To start using the app, please sign in.</h5>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"></div>
            <SignupButton />
            <LoginButton />
          </>
        )}
      </div>
    </div>
  );
};
