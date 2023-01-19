import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton } from '../components/authentication/LoginButton';
import { SignupButton } from '../components/authentication/SignupButton';

export const Home = () => {
  const { isAuthenticated } = useAuth0();
  const logo =
    'https://www.freepnglogos.com/uploads/bone-png/clipartist-clip-art-cartoon-bone-skull-bones-clipartist-svg-5.png';

  return (
    <div className="container mx-auto items-center text-center">
      <img
        className="mt-10 ml-20 max-w-[10.5rem] justify-center"
        src={logo}
        alt="Fuzzy Friends Logo"
        width="120"
      />
      <h1 className="ml-28 pt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-orange">
        Welcome to Fuzzy Friends Home Page
      </h1>
      <div className="container mx-auto flex flex-wrap items-center">
        {!isAuthenticated && (
          <>
            <h5 className="ml-28 pt-4 text-m font-bold tracking-tight text-gray-900 dark:text-black">
              To start using the app, please sign in.
            </h5>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"></div>
            <SignupButton />
            <LoginButton />
          </>
        )}
      </div>
    </div>
  );
};
